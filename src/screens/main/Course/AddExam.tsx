import React, {useState} from 'react';
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  TextInput,
  Button,
} from 'react-native';

import {Scroll} from '../../../styles/wrapper';

const ExamModalScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [questions, setQuestions] = useState([]);

  function addAnswer(index){
    const copyQuestions = questions;
    copyQuestions[index].answers = [...copyQuestions[index].answers, {title: '', correct: false}];
    setQuestions([...copyQuestions]);
  }


  function deleteQuestion(index){
    questions.slice(index, 1);
    setQuestions([...questions]);
  
  }

  function deleteAnswer(index, answerindex){
    questions[index].answers.slice(answerindex, 1);
    setQuestions([...questions]);
  }

  function changeQuestion(index, text){
    questions[index].name = text;
    setQuestions([...questions]);
  }

  function changeAnswerText(index, answerindex, text){
    questions[index].answers[answerindex].title = text;
    setQuestions([...questions]);
  }

  function changeTrueAnswer(index, answerindex){

    const currentTrue = questions[index].answers.findIndex((answer) => {
       return !!answer.correct
    });

    if(currentTrue !== -1){
      questions[index].answers[currentTrue].correct = false;
    }
     questions[index].answers[answerindex].correct = true;

     setQuestions([...questions]);
  }

  function addQuestion(){

    setQuestions([...questions, {name: '', answers: []}]);

  }

  return (
    <View style={styles.centeredView}>
      <Modal
        style={{height: 700, width: 300}}
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}>
        <Scroll>
          <View>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Add New Exam</Text>

              <View>
              {questions.map((question, index) => {
                  return (
                    <React.Fragment>
                      <Text>Soru:</Text>
                      <TextInput
                      style={{
                        height: 30,
                        width: 300,
                        borderColor: 'gray',
                        borderWidth: 1,
                      }}
                      placeholder="Soru"
                      value={question.name}
                      onChange={(event) => changeQuestion(index, event.currentTarget.value)}
                      placeholderTextColor="lightgrey"
                    />
                    <Text>Cevaplar</Text>
                      {question.answers.map((answer, answerindex) => {
                        return (
                          <TextInput
                  style={{
                    height: 30,
                    width: 300,
                    borderColor: 'gray',
                    borderWidth: 1,
                  }}
                  placeholder="  enter Exam name..."
                  placeholderTextColor="lightgrey"
                  onChange={(event) => changeAnswerText(index,answerindex, event.currentTarget.value)}
                />  
                        )
                      })}
                    <Button onPress={() => addAnswer(index)}  title="Yeni cevap olustur"/>
                    </React.Fragment>
                  )
                } )}
               
                

               <Button onPress={() => addQuestion()}  title="Yeni Soru Olustur olustur"/>
              </View>
              <View />
              <View style={styles.row}>
                <TouchableHighlight
                  style={{...styles.closeButton, backgroundColor: 'E5E5E5'}}
                  onPress={() => {
                    setModalVisible(!modalVisible);
                  }}>
                  <Text style={styles.textStyle}>Cancel</Text>
                </TouchableHighlight>
                <TouchableHighlight
                  style={{...styles.closeButton, backgroundColor: 'E5E5E5'}}
                  onPress={() => {
                    setModalVisible(!modalVisible);
                  }}>
                  <Text style={styles.textStyle}>Save</Text>
                </TouchableHighlight>
              </View>
            </View>
          </View>
        </Scroll>
      </Modal>

      <TouchableHighlight
        style={styles.openButton}
        onPress={() => {
          setModalVisible(true);
        }}>
        <Text style={styles.textStyle}>Add Exam </Text>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },

  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 3.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  openButton: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  closeButton: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'left',
    alignItems: 'flex-start',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 8,
    paddingHorizontal: 0,
    marginTop: 70,
  },
});

export default ExamModalScreen;
