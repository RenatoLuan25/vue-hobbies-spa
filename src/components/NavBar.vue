<template>
  <nav>
    <router-link to="/">Home</router-link>
    <router-link to="/pesca-natureza">Pesca & Natureza</router-link>
    <router-link to="/jogos">Jogos</router-link>
    <router-link to="/rock-classico">Rock Clássico</router-link>
    <router-link to="/sobre">Sobre</router-link>
  </nav>
</template>

<style>
nav {
  background-color: #343a40;
  padding: 1rem;
  display: flex;
  gap: 1rem;
}
a {
  color: white;
  text-decoration: none;
}
a.router-link-exact-active {
  font-weight: bold;
  text-decoration: underline;
}
</style>
