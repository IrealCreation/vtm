
import { configureStore, createSlice } from '@reduxjs/toolkit';
import { Character, CharacterDisciplineListe } from '@/interfaces/character';
import { DisciplineListe, disciplines } from "@/data/disciplines";
import { attributs } from "@/data/attributs";
import { talents } from "@/data/talents";
import { lignees } from '@/data/lignees';

const initialState: CharacterSliceState = {
  character: generateCharacter()
}

function generateCharacter(): Character {
  const character: Character = {
      nom: "",
      niveau: 1,
      experience: 0,
      disciplines: {},
      attributs: {},
      talents: {}
  };

  for (const [name, attribut] of Object.entries(attributs)) {
      character.attributs[name] = {
          attribut: attribut,
          niveau: 0
      }
  }
  for (const [name, talent] of Object.entries(talents)) {
      character.talents[name] = {
          talent: talent,
          niveau: 0
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
    },

  },
})

export const { setLignee } = characterSlice.actions;

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