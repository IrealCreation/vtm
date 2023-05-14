
import { configureStore, createSlice } from '@reduxjs/toolkit';
import { Character, CharacterDisciplineListe } from '@/interfaces/character';
import { DisciplineListe, disciplines } from "@/data/disciplines";
import { attributs } from "@/data/attributs";
import { talents } from "@/data/talents";
import { lignees } from '@/data/lignees';
import { ressources } from '@/data/ressources';

const initialState: CharacterSliceState = {
  character: generateCharacter()
}

function generateCharacter(): Character {
  const character: Character = {
      nom: "",
      niveau: 1,
      experience: 0,
      activite: "",
      apparence: "",
      personnalite: "",
      disciplines: {},
      attributs: {},
      talents: {}, 
      ressources: {}
  };

  for (const [name, attribut] of Object.entries(attributs)) {
      character.attributs[name] = {
          attribut: attribut,
          niveau: 1
      }
  }
  for (const [name, talent] of Object.entries(talents)) {
      character.talents[name] = {
          talent: talent,
          niveau: 0
      }
  }
  for (const [name, ressource] of Object.entries(ressources)) {
    character.ressources[name] = {
        ressource: ressource,
        niveau: 0,
        detail: ""
    }
}
  return character;
}

export const characterSlice = createSlice({
  name: 'character',
  initialState,
  reducers: {

    setLignee: (state, action: {payload: string}) => {
      const lignee = lignees[action.payload];
      if(lignee == null) {
        throw Error("Nom de lignée inconnue : " + action.payload);
      }
      state.character = {...state.character, lignee: lignee};

      // Assignation des disciplines
      let disciplineListe: CharacterDisciplineListe = {};

      lignee.disciplines.forEach((discipline) => {
        disciplineListe[discipline.nom] = {
          niveau: 0,
          discipline: discipline
        }
      })

      state.character = {...state.character, disciplines: disciplineListe};
      console.log(state.character);
    },

    setNom: (state, action: {payload: string}) => {
      state.character = {...state.character, nom: action.payload};
    },
    setNiveau: (state, action: {payload: number}) => {
      state.character = {...state.character, niveau: action.payload};
    },
    setExperience: (state, action: {payload: number}) => {
      state.character = {...state.character, experience: action.payload};
    },
    setActivite: (state, action: {payload: string}) => {
      state.character = {...state.character, activite: action.payload};
    },
    setApparence: (state, action: {payload: string}) => {
      state.character = {...state.character, apparence: action.payload};
    },
    setPersonnalite: (state, action: {payload: string}) => {
      state.character = {...state.character, personnalite: action.payload};
    },
    setTalent: (state, action: {payload: {name: string, value: number}}) => {
      let newTalents = {...state.character.talents};
      newTalents[action.payload.name].niveau = action.payload.value;
      state.character = {...state.character, talents: newTalents};
    },
    setAttribut: (state, action: {payload: {name: string, value: number}}) => {
      let newAttributs = {...state.character.attributs};
      newAttributs[action.payload.name].niveau = action.payload.value;
      state.character = {...state.character, attributs: newAttributs};
    },
    setDiscipline: (state, action: {payload: {name: string, value: number}}) => {
      let newDisciplines = {...state.character.disciplines};
      newDisciplines[action.payload.name].niveau = action.payload.value;
      state.character = {...state.character, disciplines: newDisciplines};
    },
    setRessourceNiveau: (state, action: {payload: {name: string, value: number}}) => {
      let newRessources = {...state.character.ressources};
      newRessources[action.payload.name].niveau = action.payload.value;
      state.character = {...state.character, ressources: newRessources};
    },
    setRessourceDetail: (state, action: {payload: {name: string, value: string}}) => {
      let newRessources = {...state.character.ressources};
      newRessources[action.payload.name].detail = action.payload.value;
      state.character = {...state.character, ressources: newRessources};
    },

  },
})

export const { setLignee, setNom, setNiveau, setExperience, setActivite, setApparence, setPersonnalite, setTalent, setAttribut, setDiscipline, setRessourceNiveau, setRessourceDetail } = characterSlice.actions;

interface CharacterSliceState {
  character: Character
}

export const store = configureStore({
  reducer: {
    characterSlice: characterSlice.reducer
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type StoreRootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type StoreAppDispatch = typeof store.dispatch