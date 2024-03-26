import React from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import  Header from "./componentes/header";
import Card from "./componentes/card";

export default function App() {
  return (
    <View style={estilo.container}>

     <Header></Header>

      <Card porcentagem = '33,3'
            titulo = 'Dormir'
            descricao = 'Todos os dias eu durmo no mínimo 8h'
            imagem = 'https://cdn-icons-png.flaticon.com/512/89/89977.png'
      ></Card>

      <Card porcentagem = '16,7'
            titulo = 'Comer'
            descricao = 'Todos os dias eu tomo café da manhã, almoço e janto.'
            imagem = 'https://cdn-icons-png.flaticon.com/512/857/857681.png'
      ></Card>

      <Card porcentagem = '16,7'
            titulo = 'Estudar'
            descricao = 'De segunda a sexta estudo na Etec, e reforço em casa'
            imagem = 'https://cdn-icons-png.flaticon.com/512/1124/1124988.png'
      ></Card>

      <Card porcentagem = '10,4'
            titulo = 'Saúde'
            descricao = 'Todos os dias deixo um momento pra cuidar da minha saúde física e mental.'
            imagem = 'https://cdn-icons-png.flaticon.com/512/5455/5455384.png'
      ></Card>

      <Card porcentagem = '10,4'
            titulo = 'Cantar'
            descricao = 'Não pode faltar no dia, canto enquanto faço as tarefas de casa.'
            imagem = 'https://static.vecteezy.com/system/resources/thumbnails/014/391/889/small/microphone-icon-on-transparent-background-microphone-icon-free-png.png'
      ></Card>

      <Card porcentagem = '12,5'
            titulo = 'Lazer'
            descricao = 'Todos os dias tenho um momento de descanso, onde leio um livro ou fico com minha família.'
            imagem = 'https://cdn-icons-png.flaticon.com/512/81/81403.png'
      ></Card>
      <Card porcentagem = '12,5'
            titulo = 'Lazer'
            descricao = 'Todos os dias tenho um momento de descanso, onde leio um livro ou fico com minha família.'
            imagem = 'https://cdn-icons-png.flaticon.com/512/81/81403.png'
      ></Card>
    </View>
  );
}

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'beige',
    borderColor: 'pink',
  },
})

