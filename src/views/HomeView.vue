

<!-- <template>
  <v-container>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="10">
        <v-card class="elevation-6 mt-10">
          <v-window v-model="step">
            <v-window-item value="1">
              <v-row>
                <v-col cols="12" sm="6">
                  <v-card-text class="mt-10">
                    <h4 class="text-center">Login</h4>
                    <h6 class="text-center grey--text">
                      Inicia sesión en tu cuenta o <br />
                      registra tu perfil
                    </h6>
                   
                    <v-row align="center" justify="center">
                      <v-col cols="12" sm="8">
                        <form v-on:submit.prevent="login">
                        <v-text-field
                          label="Email"
                          variant="outlined"
                          outlined
                          dense
                          color="blue"
                          autocomplete="off"
                          base-color="black"
                          class="mt-16 rounded-bl-xl rounded-br-xl"
                          v-model="email"
                        ></v-text-field>
                        <v-text-field
                          label="Password"
                          outlined
                          variant="outlined"
                          dense
                          color="blue"
                          autocomplete="off"
                          base-color="black"
                          class="mt-n1 rounded-bl-xl rounded-br-xl"
                          v-model="password"
                          type="password"
                        ></v-text-field>
                        <v-row>
                          <v-col cols="12" sm="7">
                            <v-checkbox
                              label="Recordar"
                              color="blue"
                              class="mt-n1"
                            ></v-checkbox>
                          </v-col>
                          <v-col cols="12" sm="5">
                            <span class="caption text-blue">
                              Olvidaste tu contraseña?
                            </span>
                          </v-col>
                        </v-row>
                        <v-btn type="submit" color="blue" dark block tile >Ingresar</v-btn>
                      </form>
                        <h5 class="text-center grey--text mt-4 mb-3">
                          O ingresa usando
                        </h5>
                        <div class="d-flex justify-space-between align-center mx-10 mb-16">
                          <v-btn
                            color="white"
                            depressed
                            outlined
                            href="https://www.facebook.com"
                            target="_blank"
                          >
                            <v-icon color="blue">mdi-facebook</v-icon>
                          </v-btn>
                          <v-btn
                            color="white"
                            depressed
                            outlined
                            href="https://www.google.com"
                            target="_blank"
                          >
                            <v-icon color="red">mdi-google</v-icon>
                          </v-btn>
                          <v-btn
                            color="white"
                            depressed
                            outlined
                            href="https://www.twitter.com"
                            target="_blank"
                          >
                            <v-icon color="blue">mdi-twitter</v-icon>
                          </v-btn>
                        </div>
                      </v-col>
                    </v-row>
                  </v-card-text>
                </v-col>
                <v-col cols="12" md="6" class="rounded-bl-xl custom-blue-bg">
                  <div style="text-align: center; padding: 180px 0">
                    <v-card-text class="white--text">
                      <h3 class="text-center">
                        ¿No tienes una cuenta todavía?
                      </h3>
                      <h6 class="text-center">Puedes crear una aquí</h6>
                    </v-card-text>
                    <div class="text-center">
                      <v-btn tile outlined dark @click="step++"
                        >Registrarse</v-btn
                      >
                    </div>
                  </div>
                </v-col>
              </v-row>
            </v-window-item>
            <v-window-item :value="2">
              <v-row>
                <v-col cols="12" md="6" class="blue rounded-br-xl">
                  <div style="text-align: center; padding: 180px 0">
                    <v-card-text class="white--text">
                      <h3 class="text-center">¿Ya tienes una cuenta?</h3>
                      <h6 class="text-center">
                        Inicia sesión en tu cuenta para que puedas seguir
                        construyendo y editar tus flujos de incorporación
                      </h6>
                    </v-card-text>
                    <div class="text-center">
                      <v-btn tile outlined dark @click="step--"
                        >Iniciar sesión</v-btn
                      >
                    </div>
                  </div>
                </v-col>

                <v-col cols="12" md="6">
                  <v-card-text class="mt-12">
                    <h4 class="text-center">
                      Regístrate para obtener una cuenta
                    </h4>
                    <h6 class="text-center grey--text">
                      Permítenos configurar todo para que puedas comenzar a
                      crear tu<br />
                      primera experiencia de incorporación
                    </h6>
                    <v-row align="center" justify="center">
                      <v-col cols="12" sm="8">
                        <form v-on:submit.prevent="register">
                        <v-row>
                          <v-col cols="12" sm="6">
                            <v-text-field
                              label="Nombre"
                              variant="outlined"
                              dense
                              color="blue"
                              autocomplete="off"
                              class="mt-4 rounded-bl-xl rounded-br-xl"
                              v-model="nombre"
                            ></v-text-field>
                          </v-col>
                          <v-col cols="12" sm="6">
                            <v-text-field
                              label="Apellido"
                              variant="outlined"
                              dense
                              color="blue"
                              autocomplete="off"
                              class="mt-4 rounded-bl-xl rounded-br-xl"
                              v-model="apellido"
                            ></v-text-field>
                          </v-col>
                        </v-row>
                        <v-text-field
                          label="Correo electrónico"
                          variant="outlined"
                          dense
                          color="blue"
                          autocomplete="off"
                          class="rounded-bl-xl rounded-br-xl"
                          v-model="email"
                        ></v-text-field>
                        <v-text-field
                          label="Contraseña"
                          variant="outlined"
                          dense
                          color="blue"
                          autocomplete="off"
                          type="password"
                          class="rounded-bl-xl rounded-br-xl"
                          v-model="password"
                        ></v-text-field>
                        <v-row>
                          <v-col cols="12" sm="7">
                            <v-checkbox
                              label="Acepto los Términos y Condiciones"
                              class="mt-n1"
                              color="blue"
                              v-model="acceptTerms"
                            ></v-checkbox>
                          </v-col>
                          <v-col cols="12" sm="5">
                            <span class="caption blue--text ml-n4"
                              >Términos y Condiciones</span
                            >
                          </v-col>
                        </v-row>
                        <v-btn type="submit" color="blue" dark block tile @click="register">Registrarse</v-btn>
                        </form>
                        <h5 class="text-center grey--text mt-4 mb-3">
                          O regístrate usando
                        </h5>
                        <div class="d-flex justify-space-between align-center mx-10 mb-16">
                          <v-btn
                            color="white"
                            depressed
                            outlined
                            href="https://www.facebook.com"
                            target="_blank"
                          >
                            <v-icon color="blue">mdi-facebook</v-icon>
                          </v-btn>
                          <v-btn
                            color="white"
                            depressed
                            outlined
                            href="https://www.google.com"
                            target="_blank"
                          >
                            <v-icon color="red">mdi-google</v-icon>
                          </v-btn>
                          <v-btn
                            color="white"
                            depressed
                            outlined
                            href="https://www.twitter.com"
                            target="_blank"
                          >
                            <v-icon color="blue">mdi-twitter</v-icon>
                          </v-btn>
                        </div>
                      </v-col>
                    </v-row>
                  </v-card-text>
                </v-col>
              </v-row>
            </v-window-item>
          </v-window>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      step: '1',
      email: '',
      password: '',
      nombre: '',
      apellido: '',
      acceptTerms: false
    };
  },
  methods: {
    login() {
      console.log(this.email);
      console.log(this.password);
      
      // Construir el objeto JSON para el login
      const loginData = {
        email: this.email,
        password: this.password,
        nombre: "daniel",
        apellido: "jara",
        acceptTerms: true
      };
      
      // Enviar los datos utilizando Axios
      axios.post('https://jsonplaceholder.typicode.com/todos/', loginData)
      .then(response => {
      // Verificar la respuesta del servidor
      if (response.data.success) {
        console.log('Login exitoso');
        // Realizar acciones adicionales después del login exitoso
      } else {
        console.log('Credenciales inválidas');
        // Realizar acciones adicionales en caso de credenciales inválidas
        
      }
    })
        .catch(error => {
          console.error('Error en el login:', error);
          // Realizar acciones adicionales en caso de error en el login
        });
    },
    register() {
      // Verificar si se aceptaron los términos y condiciones
      if (!this.acceptTerms) {
        alert('Debes aceptar los términos y condiciones para registrarte.');
        return;
      }
      
      // Verificar si todos los campos están completos
      if (this.email && this.password && this.nombre && this.apellido) {
        // Construir el objeto JSON para el registro
        const registerData = {
          nombre: this.nombre,
          apellido: this.apellido,
          email: this.email,
          password: this.password,
          acceptTerms: this.acceptTerms
        };
        
        // Enviar los datos utilizando Axios
        axios.post('https://jsonplaceholder.typicode.com/posts', registerData)
          .then(response => {
            console.log('Registro exitoso:', response.data);
            // Realizar acciones adicionales después del registro exitoso
          })
          .catch(error => {
            console.error('Error en el registro:', error);
            // Realizar acciones adicionales en caso de error en el registro
          });
      } else {
        // Validar los campos requeridos
        alert('Todos los campos son obligatorios.');
      }
    }
  }
};

</script>


<style scoped>
v-aplication .rounded-bl-xl {
  border-bottom-left-radius: 300pw !important;
}

.v-application .rounded-br-xl {
  border-bottom-right-radius: 300pw !important;
}

.custom-blue-bg {
  background-color: #2196f3;
  border-bottom-left-radius: 10px;
  border-top-right-radius: 50%;
}
</style>
``` -->
<template>
  <v-container>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="10">
        <v-card class="elevation-6 mt-10">
          <v-window v-model="step">
            <v-window-item value="1">
              <v-row>
                <v-col cols="12" sm="6">
                  <v-card-text class="mt-10">
                    <h4 class="text-center">Login</h4>
                    <h6 class="text-center grey--text">
                      Inicia sesión en tu cuenta o <br />
                      registra tu perfil
                    </h6>
                   
                    <v-row align="center" justify="center">
                      <v-col cols="12" sm="8">
                        <form v-on:submit.prevent="login">
                          <v-text-field
                            label="Email"
                            variant="outlined"
                            outlined
                            dense
                            color="blue"
                            autocomplete="off"
                            base-color="black"
                            class="mt-16 rounded-bl-xl rounded-br-xl"
                            v-model="email"
                          ></v-text-field>
                          <v-text-field
                            label="Password"
                            outlined
                            variant="outlined"
                            dense
                            color="blue"
                            autocomplete="off"
                            base-color="black"
                            class="mt-n1 rounded-bl-xl rounded-br-xl"
                            v-model="password"
                            type="password"
                          ></v-text-field>
                          <v-row>
                            <v-col cols="12" sm="7">
                              <v-checkbox
                                label="Recordar"
                                color="blue"
                                class="mt-n1"
                              ></v-checkbox>
                            </v-col>
                            <v-col cols="12" sm="5">
                              <span class="caption text-blue">
                                Olvidaste tu contraseña?
                              </span>
                            </v-col>
                          </v-row>
                          <v-btn type="submit" color="blue" dark block tile>
                            Ingresar
                          </v-btn>
                        </form>
                        <h5 class="text-center grey--text mt-4 mb-3">
                          O ingresa usando
                        </h5>
                        <div class="d-flex justify-space-between align-center mx-10 mb-16">
                          <v-btn
                            color="white"
                            depressed
                            outlined
                            href="https://www.facebook.com"
                            target="_blank"
                          >
                            <v-icon color="blue">mdi-facebook</v-icon>
                          </v-btn>
                          <v-btn
                            color="white"
                            depressed
                            outlined
                            href="https://www.google.com"
                            target="_blank"
                          >
                            <v-icon color="red">mdi-google</v-icon>
                          </v-btn>
                          <v-btn
                            color="white"
                            depressed
                            outlined
                            href="https://www.twitter.com"
                            target="_blank"
                          >
                            <v-icon color="blue">mdi-twitter</v-icon>
                          </v-btn>
                        </div>
                      </v-col>
                    </v-row>
                  </v-card-text>
                </v-col>
                <v-col cols="12" md="6" class="rounded-bl-xl custom-blue-bg">
                  <div style="text-align: center; padding: 180px 0">
                    <v-card-text class="white--text">
                      <h3 class="text-center">
                        ¿No tienes una cuenta todavía?
                      </h3>
                      <h6 class="text-center">Puedes crear una aquí</h6>
                    </v-card-text>
                    <div class="text-center">
                      <v-btn tile outlined dark @click="step++">
                        Registrarse
                      </v-btn>
                    </div>
                  </div>
                </v-col>
              </v-row>
            </v-window-item>
            <v-window-item :value="2">
              <v-row>
                <v-col cols="12" md="6" class="blue rounded-br-xl">
                  <div style="text-align: center; padding: 180px 0">
                    <v-card-text class="white--text">
                      <h3 class="text-center">¿Ya tienes una cuenta?</h3>
                      <h6 class="text-center">
                        Inicia sesión en tu cuenta para que puedas seguir
                        construyendo y editar tus flujos de incorporación
                      </h6>
                    </v-card-text>
                    <div class="text-center">
                      <v-btn tile outlined dark @click="step--">
                        Iniciar sesión
                      </v-btn>
                    </div>
                  </div>
                </v-col>

                <v-col cols="12" md="6">
                  <v-card-text class="mt-12">
                    <h4 class="text-center">
                      Regístrate para obtener una cuenta
                    </h4>
                    <h6 class="text-center grey--text">
                      Permítenos configurar todo para que puedas comenzar a
                      crear tu<br />
                      primera experiencia de incorporación
                    </h6>
                    <v-row align="center" justify="center">
                      <v-col cols="12" sm="8">
                        <form v-on:submit.prevent="register">
                          <v-row>
                            <v-col cols="12" sm="6">
                              <v-text-field
                                label="Nombre"
                                variant="outlined"
                                dense
                                color="blue"
                                autocomplete="off"
                                class="mt-4 rounded-bl-xl rounded-br-xl"
                                v-model="nombre"
                              ></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6">
                              <v-text-field
                                label="Apellido"
                                variant="outlined"
                                dense
                                color="blue"
                                autocomplete="off"
                                class="mt-4 rounded-bl-xl rounded-br-xl"
                                v-model="apellido"
                              ></v-text-field>
                            </v-col>
                          </v-row>
                          <v-text-field
                            label="Correo electrónico"
                            variant="outlined"
                            dense
                            color="blue"
                            autocomplete="off"
                            class="rounded-bl-xl rounded-br-xl"
                            v-model="email"
                          ></v-text-field>
                          <v-text-field
                            label="Contraseña"
                            variant="outlined"
                            dense
                            color="blue"
                            autocomplete="off"
                            type="password"
                            class="rounded-bl-xl rounded-br-xl"
                            v-model="password"
                          ></v-text-field>
                          <v-row>
                            <v-col cols="12" sm="7">
                              <v-checkbox
                                label="Acepto los Términos y Condiciones"
                                class="mt-n1"
                                color="blue"
                                v-model="acceptTerms"
                              ></v-checkbox>
                            </v-col>
                            <v-col cols="12" sm="5">
                              <span class="caption blue--text ml-n4"
                                >Términos y Condiciones</span
                              >
                            </v-col>
                          </v-row>
                          <v-btn
                            type="submit"
                            color="blue"
                            dark
                            block
                            tile
                            @click="step--,register"
                          >
                            Registrarse
                          </v-btn>
                        </form>
                        <h5 class="text-center grey--text mt-4 mb-3">
                          O regístrate usando
                        </h5>
                        <div class="d-flex justify-space-between align-center mx-10 mb-16">
                          <v-btn
                            color="white"
                            depressed
                            outlined
                            href="https://www.facebook.com"
                            target="_blank"
                          >
                            <v-icon color="blue">mdi-facebook</v-icon>
                          </v-btn>
                          <v-btn
                            color="white"
                            depressed
                            outlined
                            href="https://www.google.com"
                            target="_blank"
                          >
                            <v-icon color="red">mdi-google</v-icon>
                          </v-btn>
                          <v-btn
                            color="white"
                            depressed
                            outlined
                            href="https://www.twitter.com"
                            target="_blank"
                          >
                            <v-icon color="blue">mdi-twitter</v-icon>
                          </v-btn>
                        </div>
                      </v-col>
                    </v-row>
                  </v-card-text>
                </v-col>
              </v-row>
            </v-window-item>
          </v-window>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      step: '1',
      email: '',
      password: '',
      nombre: '',
      apellido: '',
      acceptTerms: false
    };
  },
  methods: {
    login() {
      console.log(this.email);
      console.log(this.password);

      // Construir el objeto JSON para el login
      const loginData = {
        email: this.email,
        password: this.password,
        nombre: "daniel",
        apellido: "jara",
        acceptTerms: true
      };

      // Enviar los datos utilizando Axios
      axios
        .post('https://jsonplaceholder.typicode.com/todos/', loginData)
        .then(response => {
          // Verificar la respuesta del servidor
          if (response.data.success) {
            console.log('Login exitoso');
            // Realizar acciones adicionales después del login exitoso
          } else {
            console.log('Credenciales inválidas');
            // Realizar acciones adicionales en caso de credenciales inválidas
          }
        })
        .catch(error => {
          console.error('Error en el login:', error);
          // Realizar acciones adicionales en caso de error en el login
        });
    },
    register() {
      // Verificar si se aceptaron los términos y condiciones
      if (!this.acceptTerms) {
        alert('Debes aceptar los términos y condiciones para registrarte.');
        return;
      }

      // Verificar si todos los campos están completos
      if (this.email && this.password && this.nombre && this.apellido) {
        // Construir el objeto JSON para el registro
        const registerData = {
          nombre: this.nombre,
          apellido: this.apellido,
          email: this.email,
          password: this.password,
          acceptTerms: this.acceptTerms
        };

        // Enviar los datos utilizando Axios
        axios
          .post('https://jsonplaceholder.typicode.com/posts', registerData)
          .then(response => {
            console.log('Registro exitoso:', response.data);
            // Realizar acciones adicionales después del registro exitoso
          })
          .catch(error => {
            console.error('Error en el registro:', error);
            // Realizar acciones adicionales en caso de error en el registro
          });
      } else {
        alert('Por favor, completa todos los campos.');
      }
    }
  }
};
</script>

<style scoped>
v-aplication .rounded-bl-xl {
  border-bottom-left-radius: 300pw !important;
}

.v-application .rounded-br-xl {
  border-bottom-right-radius: 300pw !important;
}

.custom-blue-bg {
  background-color: #2196f3;
  border-bottom-left-radius: 10px;
  border-top-right-radius: 50%;
}
</style>
