<template>
  <div>
    <h1>Bienvenue</h1>
    <b-row>
      <template v-if="hasSelectedDeck">
        <b-col>
          <b-card>
            <p>Vous pouvez rejoindre une partie en inscrivant le code de la partie ci-dessous :</p>
            <b-form-group>
              <b-input size="lg" placeholder="Code de la partie"/>
            </b-form-group>
            <b-button block variant="primary">Rejoindre la partie</b-button>
            <p
              class="mt-4"
            >Ou vous pouvez créer une nouvelle partie et donner le code qui vous sera fourni à votre adversaire pour qu'il vous rejoigne.</p>
            <b-button block variant="secondary">Créer une nouvelle partie</b-button>
          </b-card>
        </b-col>
      </template>

      <b-col>
        <template v-if="decksAsOptions.length">
          <b-card class="mb-4">
            <p>Deck actif :</p>
            <b-select
              :options="decksAsOptions"
              :value="selectedDeck && selectedDeck.id"
              @change="selectDeck"
            ></b-select>
          </b-card>
        </template>

        <b-card>
          <p>Vous pouvez créer ou modifier vos decks.</p>
          <b-button variant="primary">Gérer mes decks</b-button>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "HomePage",
  computed: {
    ...mapGetters("deck", ["decks", "selectedDeck"]),
    hasSelectedDeck() {
      return !!this.selectedDeck;
    },
    decksAsOptions() {
      return this.decks.map(deck => ({
        value: deck.id,
        text: deck.name
      }));
    }
  },
  methods: {
    ...mapActions("deck", ["firebaseDecks", "selectDeck"])
  },
  created() {
    this.firebaseDecks();
  }
};
</script>
