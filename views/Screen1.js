import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList, ScrollView} from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
import { Entypo } from '@expo/vector-icons'; 
import { EvilIcons } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux';
import { addJob, deleteJob, updateJob, searchJob } from '../redux/actions';


export default function Screen1() {

    const dispatch = useDispatch();
    const data = useSelector((state) => state.jobs);
    const [job, setJob] = useState('');

    const search = useSelector((state) => state.searchJob);

    //Add Job
    const handleAddJob = () => {
        if (job.trim() === '') {
          return;
        }
        const newJob = { id: data.length + 1, job: job };
        dispatch(addJob(newJob));
        setJob(''); 
      };

    //Delete Job
    const handleDelete = (id) => {
        dispatch(deleteJob(id));
      };

    //Update Job
    const handleUpdate = (id, updatedJob) => {
        dispatch(updateJob(id, updatedJob));
        setJob('');
      };

    //Search Job
    const handleSearch = (text) => {
        dispatch(searchJob(text));
    };

    const filteredData = data.filter((item) =>
    item.job.toLowerCase().includes(search.toLowerCase())
);

  return (
    <View style={styles.container}>
        <View style={{margin: 20, alignItems: 'center'}}>
            <Text style={styles.txt1}>HI YOUR JOB</Text>
        </View>
        <View style={{marginBottom: 30}}>
            <TextInput style={styles.input} placeholder='Nhập Job'
           onChangeText={(text)=>{setJob(text)}} value={job}
            ></TextInput>
            <View style={{flexDirection: 'row'}}>
            <EvilIcons style={{position: 'absolute', marginTop: 23, marginLeft: 30}} name="search" size={30} color="black" />
            <TextInput style={styles.input} placeholder='Search'
           onChangeText={handleSearch} value={search}
            ></TextInput>
            </View>
        </View>
        <View style={{margin: 20, alignItems: 'center', backgroundColor: '#F2C53F', borderRadius: 10}}>
            <Text style={styles.txt2}>LIST JOB</Text>
        </View>
        <ScrollView>
        <FlatList
        data={filteredData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
            <TouchableOpacity onPress={() =>{setJob(item.job)}}>
            <Text style={{ width: 280, height: 40, marginLeft: 30, marginTop: 10, borderRadius: 6, fontSize: 20, fontWeight: 400, backgroundColor: '#C7C4BD', padding: 5 }}>
              {item.job}
            </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleDelete(item.id)}>
              <AntDesign style={{ marginTop: 20, marginLeft: 5 }} name="delete" size={24} color="red" />
            </TouchableOpacity>
            <TouchableOpacity  onPress={() => handleUpdate(item.id, job)}>
              <Entypo style={{ marginTop: 20, marginRight: 30 }} name="pencil" size={24} color="green" />
            </TouchableOpacity>
          </View>
        )}
      />
        </ScrollView>
       
       <View style={{height: 110, alignItems: 'center'}}>
            <TouchableOpacity style={styles.top1} onPress={handleAddJob} >
                ADD JOB
            </TouchableOpacity>
       </View>
        
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  txt1:{
    fontSize: 25,
    fontWeight: 700,
  },
  input:{
    width: 320,
    height: 40,
    borderWidth: 1,
    marginLeft: 30,
    marginTop: 20,
    borderRadius: 6,
    fontSize: 20,
    fontWeight: 400,
    paddingLeft: 30,
  },
  view1:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',

  },
  input1:{
    width: 280,
    height: 40,
    marginLeft: 30,
    marginTop: 10,
    borderRadius: 6,
    fontSize: 20,
    fontWeight: 400,
    backgroundColor: '#C7C4BD',
    padding: 5
  },
  txt2:{
    fontSize: 22,
    fontWeight: 500,
  },
  top1:{
    width: 140,
    height: 35,
    borderWidth: 1,
    textAlign: 'center',
    justifyContent: 'center',
    backgroundColor: '#3D647A',
    color: 'white',
    borderRadius: 10,
    margin: 20
  }
});
