import React from "react"
const pokemon = ["Bulbasaur", "Charmander", "Squirtle"]

const wrappers = pokemon.map(poke => {
    return "<p>"+poke+"<p>"
}) 