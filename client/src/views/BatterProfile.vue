<template>
  <div class="player-profile">
    <div
      class="w-full flex flex-wrap justify-between cursor-pointer border b-gray-400 rounded p-6 bg-white m-8"
    >
      <div class="column-left justify-center items-center text-center pl-8">
        <div class="text-md font-bold flex flex-col text-gray-900">
          <span class="uppercase">{{ currentBatter.Name }}</span>
          <span class="font-normal text-gray-700 text-sm">
            {{ currentBatter.Team }}
          </span>
        </div>
        <div class="flex items-center justify-center logo">
          <!-- image here -->
          <i :class="matchTeamLogo(currentBatter.Team)"></i>
        </div>
        <h3 class="text-black mb-6">Player Projections</h3>
        <p class="text-gray-700 mb-2">Batting Average -- On Base Percentage</p>
        <div class="text-3xl font-bold text-gray-900 mb-6">
          {{ currentBatter.AVG }}
          <span class="font-normal text-gray-700 mx-1">/</span>
          {{ currentBatter.OBP }}
        </div>
        <p class="text-gray-700 mb-2">Hits -- At Bats</p>
        <div class="text-3xl font-bold text-gray-900 mb-6">
          {{ currentBatter.H }}
          <span class="font-normal text-gray-700 mx-1">/</span>
          {{ currentBatter.AB }}
        </div>
        <p class="text-gray-700 mb-2">Home Runs -- Slugging Percentage</p>
        <div class="text-3xl font-bold text-gray-900 mb-6">
          {{ currentBatter.HR }}
          <span class="font-normal text-gray-700 mx-1">/</span>
          {{ currentBatter.SLG }}
        </div>
        <p class="text-gray-700 mb-2">Runs -- Stolen Bases</p>
        <div class="text-3xl font-bold text-gray-900 mb-6">
          {{ currentBatter.R }}
          <span class="font-normal text-gray-700 mx-1">/</span>
          {{ currentBatter.SB }}
        </div>
        <p class="text-gray-700 mb-2">Offensive War -- Defensive War</p>
        <div class="text-3xl font-bold text-gray-900 mb-6">
          {{ currentBatter.Off }}
          <span class="font-normal text-gray-700 mx-1">/</span>
          {{ currentBatter.Def }}
        </div>
        <div class="flex justify-between w-full">
          <div class="flex items-center text-gray-700 px-2">
            <!-- <svg
              class="mr-2 h-4"
              viewBox="0 0 11 18"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
            >
              <g
                id="Page-1"
                stroke="none"
                stroke-width="1"
                fill="none"
                fill-rule="evenodd"
              >
                <g
                  id="Desktop-HD"
                  transform="translate(-120.000000, -479.000000)"
                  fill="#60A2D7"
                  fill-rule="nonzero"
                >
                  <g id="Group" transform="translate(95.000000, 222.000000)">
                    <g
                      id="Group-3"
                      transform="translate(25.000000, 256.774194)"
                    >
                      <g
                        id="028-drop"
                        transform="translate(0.000000, 0.225806)"
                      >
                        <path
                          d="M11,11.9334341 C11,15.0552582 8.53750272,17.5862069 5.5,17.5862069 C2.46249728,17.5862069 0,15.0552582 0,11.9334341 C0,7.58026159 5.5,0 5.5,0 C5.5,0 11,7.58026159 11,11.9334341 L11,11.9334341 Z"
                          id="Path"
                        />
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </svg> -->
            Games Played: {{ currentBatter.G }}
          </div>
          <div class="flex items-center text-gray-700 px-2">
            <svg
              class="mr-2 h-4 w-4"
              viewBox="0 0 12 21"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
            >
              <g
                id="Page-1"
                stroke="none"
                stroke-width="1"
                fill="none"
                fill-rule="evenodd"
              >
                <g
                  id="Desktop-HD"
                  transform="translate(-201.000000, -480.000000)"
                  fill="#0ABDE3"
                  fill-rule="nonzero"
                >
                  <g id="Group" transform="translate(95.000000, 222.000000)">
                    <g
                      id="Group-3"
                      transform="translate(25.000000, 256.774194)"
                    >
                      <g
                        id="wind"
                        transform="translate(87.500000, 11.225806) rotate(-90.000000) translate(-87.500000, -11.225806) translate(77.000000, 5.225806)"
                      >
                        <g id="w25">
                          <path
                            d="M16.222113,3.9997453 C16.1020238,4.11833549 16.0351226,4.28256699 16.0372726,4.45349848 C16.0394226,4.62442997 16.1104323,4.78683812 16.2334644,4.90221395 C16.6379853,5.28943966 17.0750123,5.74649295 17.5388698,6.22999608 C17.7684767,6.47016066 18.06,6.8515674 18.2916708,7.08908699 C16.7035135,7.07321708 16.0399754,7.11553683 15.1586978,7.07639107 C14.8000983,7.05999216 14.595258,7.23032915 14.595258,7.58264107 C14.595258,7.93442398 14.7443735,8.11216693 15.1034889,8.11216693 C15.9563882,8.11216693 16.7896806,8.06878918 18.3881572,8.08571708 C17.6494273,8.82722969 16.9039897,9.56168541 16.151941,10.288989 C16.0291152,10.4045196 15.9582985,10.5669407 15.9562468,10.737822 C15.9541952,10.9087034 16.0210908,11.0728624 16.1411057,11.1914577 C16.3966491,11.4436893 16.7995644,11.4483255 17.0605651,11.2020376 C18.1048894,10.2022335 19.4185504,8.91148119 20.2957002,8.02805643 C20.4143735,7.90850313 20.5072482,7.74874608 20.5072482,7.58264107 L20.5072482,7.56465517 C20.5072482,7.39273119 20.3988943,7.22927116 20.2699017,7.11236285 C19.7188452,6.6151058 19.092457,5.97501959 18.5001229,5.35662226 C18.0589126,4.89113359 17.6081986,4.43521373 17.1482801,3.98916536 C16.8847573,3.74276899 16.4802155,3.74739022 16.222113,3.9997453 L16.222113,3.9997453 Z"
                            id="Path"
                          />
                          <path
                            d="M0,7.255721 C0,7.04623824 0.165110565,6.87695925 0.369434889,6.87695925 L18.7214742,6.87695925 C18.9252826,6.87695925 19.0909091,7.04623824 19.0909091,7.255721 L19.0909091,8.08518809 C19.0909091,8.29467085 18.9257985,8.46394984 18.7214742,8.46394984 L0.369434889,8.46394984 C0.165401634,8.46394984 0,8.29437243 0,8.08518809 L0,7.255721 Z"
                            id="Path"
                          />
                          <path
                            d="M0.369434889,8.46394984 C0.165401634,8.46394984 0,8.29437243 0,8.08518809 L0,0.378761755 C0,0.169278997 0.165110565,0 0.369434889,0 L1.17847666,0 C1.38228501,0 1.54791155,0.169278997 1.54791155,0.378761755 L1.54791155,8.08518809 C1.54791155,8.29414185 1.38280098,8.46394984 1.17847666,8.46394984 L0.369434889,8.46394984 Z"
                            id="Path"
                          />
                        </g>
                        <path
                          d="M4.108,8.53448276 C3.91028206,8.53448276 3.75,8.3634922 3.75,8.15256466 L3.75,0.381918103 C3.75,0.170689655 3.91,0 4.108,0 L4.892,0 C5.0895,0 5.25,0.170689655 5.25,0.381918103 L5.25,8.15256466 C5.25,8.3632597 5.09,8.53448276 4.892,8.53448276 L4.108,8.53448276 Z"
                          id="Path"
                        />
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
            WAR: {{ currentBatter.WAR }}
          </div>
        </div>
      </div>

      <div class="column-right w-2/5">
        <div class="py-3">
          <form @submit.prevent>
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              >Comment</label
            >
            <textarea
              v-model="myComment"
              class="no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-32 resize-none"
              id="message"
            ></textarea>
            <button
              class="shadow hover:bg-green-400 bg-black focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded mb-4"
              @click="addComment"
            >
              Add Comment
            </button>
          </form>

          <div
            v-if="
              this.$store.getters.getComments &&
                this.$store.getters.getComments.length > 0
            "
          >
            <div
              v-for="comment in this.$store.getters.getComments"
              :key="comment.id"
              class="bg-teal-100 border border-teal-400 text-teal-900 px-6 py-5 pb-12 rounded relative mt-8"
              role="alert"
            >
              <div>
                <p class="font-bold">{{ user.displayName }}</p>
                <p
                  class="text-sm float-left top-0 message-text block sm:inline pr-6"
                >
                  {{ comment.message }}
                </p>
                <span
                  @click="deleteComment(comment.id)"
                  class="absolute top-0 bottom-0 right-0 px-4 py-3"
                >
                  <svg
                    class="fill-current h-6 w-6 text-teal-500"
                    role="button"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <title>Close</title>
                    <path
                      d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- end of right column -->
    </div>
  </div>
</template>

<script>
import batterProjections from "../../public/batters_2020.json";
import { mapActions, mapGetters } from "vuex";
import methods from "../methods";
const db = require("../db");
import firebase from "firebase/app";
import "firebase/auth";
export default {
  name: "BatterProfile",
  beforeCreate: function() {
    this.$store.dispatch("setComments");
  },
  data() {
    return {
      team: batterProjections.Team,
      myComment: "",
      errors: ""
    };
  },
  computed: {
    ...mapGetters({ currentBatter: "getCurrentBatter" }),
    ...mapGetters(["user"])
  },
  methods: {
    ...methods,
    addComment() {
      this.errors = "";
      if (this.myComment !== "") {
        db.commentsCollection
          .add({
            message: this.myComment,
            created_at: Date.now()
          })
          .then(response => {
            if (response) {
              this.myComment = "";
            }
          })
          .catch(error => [(this.errors = error)]);
      } else {
        this.errors = "Please enter what you want to say.";
      }
    },
    deleteComment(id) {
      if (id) {
        db.commentsCollection
          .doc(id)
          .delete()
          .then(function() {
            console.log("Document successfully deleted");
          })
          .catch(function(error) {
            this.errors = error;
          });
      } else [(this.error = "Invalid ID")];
    }
  }
};
</script>

<style scoped>
.logo {
  font-size: 5rem;
}
.message-text {
  margin-top: -0.5rem;
}
</style>
