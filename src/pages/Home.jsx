import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';

const Home = () => {
  const [linkedinPosts, setLinkedinPosts] = useState([]);
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    // Fetch LinkedIn Posts (You'll need API access for this step)
    fetchLinkedInPosts();

    // You can add more API calls for LinkedIn profile if necessary.
    const accessToken = 'your-access-token'; // Replace with actual access token
    if (accessToken) {
      fetchLinkedInProfileData(accessToken);
    }
  }, []);

  const fetchLinkedInPosts = async () => {
    try {
      // Replace with the actual LinkedIn API endpoint for posts
      const response = await axios.get('https://api.linkedin.com/v2/shares', {
        headers: {
          Authorization: `Bearer your-access-token`, // Use your LinkedIn access token
        },
      });
      setLinkedinPosts(response.data.elements || []);
    } catch (error) {
      console.error('Error fetching LinkedIn posts:', error);
    }
  };

  const fetchLinkedInProfileData = async (accessToken) => {
    try {
      const response = await axios.get('https://api.linkedin.com/v2/me', {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      setProfile(response.data);
    } catch (error) {
      console.error('Error fetching LinkedIn profile data:', error);
    }
  };

  return (
    <div className="bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="relative w-full h-screen bg-gradient-to-r from-teal-500 via-cyan-600 to-blue-700">
        <motion.div
          className="absolute inset-0 flex flex-col justify-center items-center text-center p-8 space-y-4"
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {/* Profile Picture Animation */}
          <motion.img
            src="/dp1.png" // Replace with your profile picture path
            alt="Profile"
            className="h-64 rounded-full border-4 border-teal-400"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          />

          <h1 className="text-5xl font-extrabold text-white leading-tight">Hi, I'm Pushker Naresh</h1>
          <p className="text-xl text-gray-300">A passionate full-stack developer with expertise in building scalable web applications.</p>
          <motion.a
            href="#about"
            className="bg-teal-400 text-white py-2 px-6 rounded-lg shadow-lg hover:bg-teal-500 transform transition-transform duration-300"
            whileHover={{ scale: 1.1 }}
          >
            Learn More About Me
          </motion.a>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-8 max-w-6xl mx-auto">
        <motion.div
          className="text-center space-y-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-3xl font-semibold text-teal-300">About Me</h2>
          <p className="text-lg leading-relaxed text-gray-400">
            {profile ? (
              <>
                I’m {profile.localizedFirstName} {profile.localizedLastName}, a software developer with expertise in full-stack
                development. I specialize in React, Node.js, Express, MongoDB, and AWS. I’m passionate about building scalable
                web applications and solving complex problems.
              </>
            ) : (
              'Loading profile data...'
            )}
          </p>
        </motion.div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gray-800 py-16">
        <div className="max-w-6xl mx-auto text-center space-y-8">
          <motion.h2
            className="text-3xl font-semibold text-teal-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            What People Say
          </motion.h2>

          <div className="flex justify-center space-x-8">
            <motion.div
              className="bg-gray-700 p-8 rounded-lg shadow-xl max-w-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-xl text-gray-200">"Pushker is an amazing developer with excellent problem-solving skills. He consistently delivers high-quality work on time."</p>
              <h4 className="mt-4 text-teal-400">- John Doe, CTO of TechCorp</h4>
            </motion.div>
            <motion.div
              className="bg-gray-700 p-8 rounded-lg shadow-xl max-w-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <p className="text-xl text-gray-200">"A talented and dedicated developer. His ability to quickly understand complex requirements and deliver solutions is top-notch."</p>
              <h4 className="mt-4 text-teal-400">- Jane Smith, Senior Developer at CodeWave</h4>
            </motion.div>
          </div>
        </div>
      </section>

      {/* LinkedIn Posts Section */}
      <section className="py-16 px-8 bg-gray-900">
        <div className="max-w-6xl mx-auto text-center space-y-8">
          <motion.h2
            className="text-3xl font-semibold text-teal-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Latest LinkedIn Posts
          </motion.h2>

          <div className="space-y-8">
            {linkedinPosts.length > 0 ? (
              linkedinPosts.map((post, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-700 p-6 rounded-lg shadow-xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                >
                  <h3 className="text-xl text-teal-300">{post.text || 'Post content unavailable'}</h3>
                  <p className="mt-2 text-gray-400">{post.publishedAt}</p>
                </motion.div>
              ))
            ) : (
              <p className="text-gray-400">Loading LinkedIn posts...</p>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 py-6">
        <div className="max-w-6xl mx-auto text-center text-gray-400">
          <p>&copy; 2024 Pushker Naresh. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
