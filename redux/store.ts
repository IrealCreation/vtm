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

export function generateCharacter(): Character {
  const character: Character = {
      nom: "",
      niveau: 1,
      experience: 0,
      activite: "",
      apparence: "",
      personnalite: "",
      sante: 1,
      santeMax: 1,
      volonte: 1,
      volonteMax: 1,
      sang: 1,
      sangMax: 1,
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

    setCharacter: (state, action: {payload: Character}) => {
      state.character = action.payload;
      // console.log(state.character);
    },

    resetCharacter: (state, action: {}) => {
      state.character = generateCharacter();
    },

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

    computeEtat: (state, action:{}) => {
      let sante: number = 3 + state.character.attributs["Vigueur"].niveau;
      let volonte: number = 1 + state.character.attributs["Sang-froid"].niveau + state.character.attributs["Détermination"].niveau;
      let sang = 6;
      if(state.character.lignee?.nom == "Tremere") {
        sang ++; sante --;
      }

      state.character = {...state.character, santeMax: sante, volonteMax: volonte, sangMax: sang};
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
    setSante: (state, action: {payload: number}) => {
      state.character = {...state.character, sante: action.payload};
    },
    setVolonte: (state, action: {payload: number}) => {
      state.character = {...state.character, volonte: action.payload};
    },
    setSang: (state, action: {payload: number}) => {
      state.character = {...state.character, sang: action.payload};
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

export const { setCharacter, resetCharacter, setLignee, setNom, setNiveau, setExperience, setActivite, setApparence, setPersonnalite, setSante, setVolonte, setSang, setTalent, setAttribut, setDiscipline, setRessourceNiveau, setRessourceDetail, computeEtat } = characterSlice.actions;

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