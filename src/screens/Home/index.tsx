import { useMemo, useState } from "react";
import { Alert, FlatList, Text, TouchableOpacity, View } from "react-native"
import Ionicons from '@expo/vector-icons/Ionicons';

import SVGImg from '../../assets/logo.svg'
import EmptySVGImg from '../../assets/empty.svg'

import { StyledTextInput } from "../../components/StyledTextInput";
import { Counter } from "../../components/Counter";
import { Task } from "../../components/Task";
import { palette } from "../../../theme"

import { styles } from "./styles"

export type Todo = {
  id: number
  done: boolean
  text: string
}

export function Home() {
  const [todos, setTodos] = useState<Array<Todo>>([])
  const [id, setId] = useState<number>(0)

  const created = useMemo(() => todos.length, [todos])
  const completed = useMemo(() => todos.reduce((prev: number, todo: Todo) => prev + (todo.done ? 1 : 0), 0), [todos])

  const [input, setInput] = useState<string>('')

  const handleAddTodo = (text: string) => {
    if (text.length <= 2) {
      return Alert.alert('Tamanho mínimo', 'Um todo precisa ter no mínimo 3 caracteres')
    }
    setTodos(prevState => [...prevState, { id, done: false, text }])
    setId(prevState => prevState + 1)
    setInput('')
  }

  const handleRemoveTodo = (idx: number) => {
    Alert.alert('Remover', `Deseja remover o todo '${todos[idx].text}'?`, [
      {
        text: 'Sim',
        onPress: () => setTodos(prevState => [...prevState.filter((_item, index) => index !== idx)]),
      },
      {
        text: 'Não',
        style: 'cancel',
      }
    ])
  }

  const handleCheckTodo = (idx: number, value: boolean) => {
    setTodos(prevState => [...prevState.map((item, index) => index !== idx ? { ...item } : { ...item, done: value })])
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <SVGImg height={150} />
      </View>
      <View style={styles.content}>
        <View style={styles.form}>
          <StyledTextInput
            value={input}
            onChangeText={setInput}
            style={styles.input}
            focusedStyle={styles.inputFocused}
            placeholder={'Adicione uma nova tarefa'}
            placeholderTextColor={palette.gray300}
          />
          <TouchableOpacity style={styles.button} onPress={() => handleAddTodo(input)}>
            <Ionicons name="add-circle-outline" size={26} color={palette.gray100} />
          </TouchableOpacity>
        </View>
        <View style={styles.info}>
          <Counter
            name={'Criadas'}
            color={palette.blue}
            value={created}
          />
          <Counter
            name={'Concluídas'}
            color={palette.purple}
            value={completed}
          />
        </View>
        <FlatList
          data={todos}
          keyExtractor={(item) => item.id+''}
          renderItem={({ item, index }) => (
            <Task 
              todo={item}
              onCheck={(checked) => handleCheckTodo(index, checked)}
              onRemove={() => handleRemoveTodo(index)}
            />
          )}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={() => (
            <View style={styles.emptyGroup}>
              <EmptySVGImg height={70} />
              <Text style={{ ...styles.listEmptyInput, fontWeight: 'bold' }}>
                {'Você ainda não tem tarefas cadastradas'}
              </Text>
              <Text style={styles.listEmptyInput}>
                {'Crie tarefas e organize seus itens a fazer'}
              </Text>
            </View>
          )}
        />
      </View>
    </View>
  )
}