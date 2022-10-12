import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {Menu} from '../../components';
import {TodoService} from '../../services';

const COLORS = {primary: '#1f145c', white: '#fff'};

const HomeScreen = () => {
  const [todoList, setTodoList] = useState<any>();
  const [todoItem, setTodoItem] = useState<string>();

  const getDate = async () => {
    try {
      const res = await TodoService.getTodoList();
      console.log({res});

      setTodoList(res);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getDate();
  }, []);

  const handleChangeAddTodo = (value: string) => {
    setTodoItem(value);
  };

  const handleAddTodo = async () => {
    try {
      console.log('vao day ko');
      if (todoItem) {
        await TodoService.createTodo({todoItem});
        setTodoItem('');
        await getDate();
      }
    } catch (error) {}
  };

  const handleRemoveTodo = async (id: string) => {
    await TodoService.deleteTodo(id);
    await getDate();
  };

  console.log({todoItem});

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
      <Menu />
      <View style={styles.header}>
        <Text style={{fontWeight: 'bold', fontSize: 20, color: COLORS.primary}}>
          TODO APP
        </Text>
      </View>
      <View>
        {todoList?.map((item: any, index: any) => (
          <View key={`${item.todoItem} ${index}`} style={styles.itemTodo}>
            <Text style={{width: 200}}>{item.todoItem}</Text>
            <TouchableOpacity onPress={() => handleRemoveTodo(item._id)}>
              <Text style={{paddingLeft: 20}}>Remove</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
      <View style={styles.footer}>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Add Todo"
            value={todoItem}
            onChangeText={value => handleChangeAddTodo(value)}
          />
        </View>
        <TouchableOpacity onPress={handleAddTodo}>
          <View style={styles.iconContainer}>
            <Text style={{color: 'white'}}>Add</Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    color: COLORS.white,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  inputContainer: {
    backgroundColor: COLORS.white,
    elevation: 40,
    flex: 1,
    height: 50,
    marginVertical: 20,
    marginRight: 20,
    borderRadius: 30,
    paddingHorizontal: 20,
  },
  iconContainer: {
    height: 50,
    width: 50,
    backgroundColor: COLORS.primary,
    color: 'white',
    borderRadius: 25,
    elevation: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemTodo: {
    display: 'flex',
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
});

export default HomeScreen;
