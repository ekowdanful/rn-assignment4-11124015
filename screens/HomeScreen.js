import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import JobCard from '../components/JobCard';

const HomeScreen = ({ route }) => {
  const { name, email } = route.params;

  // Example job cards data
  const jobs = [
    { id: 1, title: 'Software Developer', company: 'ABC Corp' },
    // Add more job data here
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome, {name}!</Text>
      <Text style={styles.text}>Email: {email}</Text>
      <View style={styles.cardsContainer}>
        {jobs.map(job => (
          <JobCard key={job.id} job={job} />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  text: {
    fontSize: 18,
    marginBottom: 10,
  },
  cardsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});

export default HomeScreen;
