<template>
  <div class="hello container">
    <h1 class="text-s">{{ nombre }}</h1>
    <p class="d-flex justify-content-start">
  <button
   class="btn btn-primary"
   type="button"
   data-toggle="collapse"
   data-target=".multi-collapse"
   aria-expanded="false"
   aria-controls="multiCollapseExample1 multiCollapseExample2">
    Más...
    </button>
</p>
<div class="col">
  <div class="row">
    <div class="collapse multi-collapse show" id="multiCollapseExample1">
      <div class="card bg-dark">
            <div class="card-body">
              <h5 class="card-title">Sobre mi...</h5>
              <div class="card-text">
                <p class="text-justify">
               Soy una fanática del terror, el animal print y las chamarras de cuero con pelo. <br>
                En realidad lo gracioso es que sea fanática del terror cuando era una cobarde en
               mi infancia, siendo el chupacabras mi más grande terror.
                De alguna manera crecí para ser alguien que necesita un buen cuento de terror para
              dormir en mis noches de insomnio y nada me pone de mejor humor que una buena pelicula
              de fantasmas, demonios o slashers, de hecho ahora las cosas que me causan miedo de
              verdad tienen que ver todo con procesos quirúrgicos más que otra cosa, las cirugías
               me aterran.
                </p>
                <p>
               En mi tiempo libre me gusta hacer ejercicio, subir montañas, andar en bicicleta
                o escribir historias para los personajes de calabozos y dragones con los que
                juego junto a mis amigos. También gusto de quedarme en casa y resolver laberintos
                en Genshin Impact o jugar algún juego de mesa con mis familiares o amigos.
                </p>
              </div>
            </div>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="collapse multi-collapse" id="multiCollapseExample2">
      <div
       class="card bg-dark">
          <div class="card-body">
            <h2 class="card-title">Estudios</h2>
            <p class="card-text">
              Listaré un resumen de mi camino académico para tener una breve
              referencia de mis estudios.
            </p>
            <ul class="list-group list-group-flush rounded">
              <li class="list-group-item bg-dark">
                <p>Primaria/Secundaria: Colegio Guadalupe</p>
              </li>
              <li class="list-group-item bg-dark"><p>Preparatoria: CECyT 9</p></li>
              <li class="list-group-item bg-dark"><p>Licenciatura: UPIITA</p></li>
              <li class="list-group-item bg-dark"><p>CENLEX: Japones intermedio</p></li>
              <li class="list-group-item bg-dark"><p>CENLEX: Francés intermedio</p></li>
              <li class="list-group-item bg-dark"><p>Certificado TOEFL: A2</p></li>
              <li class="list-group-item bg-dark">
                <a href="https://openwebinars.net/cert/45N1E">Otros certificados</a>
              </li>
            </ul>
          </div>
      </div>
    </div>
  </div>
</div>
</div>
</template>

<script>
export default {
  name: 'HelloWorld',
  computed: {
    nombre() {
      return this.$store.state.nombre;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
