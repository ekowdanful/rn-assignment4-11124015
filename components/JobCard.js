import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const JobCard = ({ job }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{job.title}</Text>
      <Text style={styles.company}>{job.company}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: '48%',
    padding: 16,
    margin: '1%',
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  company: {
    fontSize: 14,
    color: 'gray',
  },
});

export default JobCard;
