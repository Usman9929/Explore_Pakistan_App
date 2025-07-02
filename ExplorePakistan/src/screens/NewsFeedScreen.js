import React, { useState, useEffect } from 'react';
import {
  View, Text, TextInput, Image, TouchableOpacity,
  FlatList, StyleSheet, ActivityIndicator
} from 'react-native';
import axios from 'axios';
import { launchImageLibrary } from 'react-native-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

const API = "http://192.168.43.98:8000";

const NewsFeedScreen = () => {
  const [posts, setPosts] = useState([]);
  const [postContent, setPostContent] = useState('');
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const res = await axios.get(`${API}/home-feed/`);
      setPosts(res.data);
    } catch (err) {
      console.error("Error fetching posts", err);
    }
  };

  const handleImagePick = async () => {
    const options = {
      mediaType: 'photo',
      quality: 1,
    };

    launchImageLibrary(options, (response) => {
      if (response.didCancel) {
        console.log("User cancelled image picker");
      } else if (response.errorCode) {
        console.log("ImagePicker Error:", response.errorMessage);
      } else {
        setImage(response.assets[0].uri);
      }
    });
  };

  const handlePostSubmit = async () => {
    if (!postContent.trim()) return;

    const token = await AsyncStorage.getItem('token'); // Make sure it's saved during login

    const formData = new FormData();
    formData.append('title', postContent);
    formData.append('content', postContent);
    if (image) {
      const filename = image.split('/').pop();
      const fileType = filename.split('.').pop();
      formData.append('image', {
        uri: image,
        name: filename,
        type: `image/${fileType}`,
      });
    }

    setLoading(true);
    try {
      await axios.post(`${API}/home-feed/`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${token}`,
        },
      });
      setPostContent('');
      setImage(null);
      fetchPosts();
    } catch (error) {
      console.error("Post failed", error.response?.data || error.message);
    } finally {
      setLoading(false);
    }
  };

  const renderPost = ({ item }) => (
    <View style={styles.postCard}>
      <Text style={styles.username}>{item.user?.username || 'Unknown'}</Text>
      <Text style={styles.content}>{item.content}</Text>
      {item.image && (
        <Image source={{ uri: `${API}${item.image}` }} style={styles.postImage} />
      )}
      <View style={styles.actions}>
        <Text>👍 {item.likes}</Text>
        <Text>💬 {item.comments_count}</Text>
        <Text>🔄 {item.shares}</Text>
      </View>
    </View>
  );

  return (
    <FlatList
      data={posts}
      keyExtractor={(item) => item.id?.toString()}
      ListHeaderComponent={
        <View style={styles.createPost}>
          <Text style={styles.title}>Create a Post</Text>
          <TextInput
            placeholder="What's on your mind?"
            style={styles.input}
            value={postContent}
            onChangeText={setPostContent}
            multiline
          />
          {image && <Image source={{ uri: image }} style={styles.preview} />}
          <View style={styles.buttonRow}>
            <TouchableOpacity onPress={handleImagePick} style={styles.button}>
              <Text>📷 Add Image</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handlePostSubmit} style={styles.postButton}>
              {loading ? <ActivityIndicator color="#fff" /> : <Text style={styles.postButtonText}>Post</Text>}
            </TouchableOpacity>
          </View>
        </View>
      }
      renderItem={renderPost}
      contentContainerStyle={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: { padding: 10, backgroundColor: '#fff' },
  createPost: { marginBottom: 20, padding: 10, borderRadius: 10, backgroundColor: '#f0f0f0' },
  title: { fontWeight: 'bold', marginBottom: 5, fontSize: 16 },
  input: {
    borderWidth: 1, borderColor: '#ccc', borderRadius: 8,
    padding: 10, marginBottom: 10, textAlignVertical: 'top', minHeight: 80
  },
  preview: { width: '100%', height: 200, borderRadius: 10, marginBottom: 10 },
  buttonRow: { flexDirection: 'row', justifyContent: 'space-between' },
  button: { padding: 10, backgroundColor: '#eee', borderRadius: 8 },
  postButton: { backgroundColor: 'red', padding: 10, borderRadius: 8 },
  postButtonText: { color: '#fff', fontWeight: 'bold' },
  postCard: { marginBottom: 15, backgroundColor: '#fafafa', padding: 10, borderRadius: 10 },
  username: { fontWeight: 'bold', marginBottom: 5 },
  content: { marginBottom: 5 },
  postImage: { width: '100%', height: 200, borderRadius: 10, marginTop: 5 },
  actions: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 },
});

export default NewsFeedScreen;
