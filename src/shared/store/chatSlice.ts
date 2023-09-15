import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

export interface User {
  id: number;
  conversation_user_id?: number;
  nickname: string;
  name: string;
}
export interface UserInfo extends User {
  profile_image_url: string;
}
export interface ChatUserInfo extends UserInfo {
  active_flag: number;
}
export interface RecChatRoom {
  socket_flag: number;
  check_in_flag: boolean;
  speaker_id: number;
  re_enter_id: number;
  user_info: ChatUserInfo[];
}
export interface RecAlert {
  alert_five_minute: number | null;
}
export interface RecNotify {
  socket_flag: number;
  speaker: User;
}
export interface RecQuestion {
  socket_flag: number;
  speaker: User;
  question_number: number;
  question_last_flag: boolean;
  user_info: UserInfo[];
  question_list: {
    keyword_name: string;
    question_content: string;
    depth: number;
    question_guide: string[];
  };
}
export interface ResQuestion {
  sharedFlag: boolean;
  next_speaker: {
    nickname: string;
    name: string;
  };
}
export interface RecEmotion {
  emotion_code: number;
}
export interface Emotion extends RecEmotion {
  emotion_count: number;
}
export interface RecNewEmotion {
  emotion_list: Emotion[];
}

type ChatState = {
  isSocketConnected: boolean;
  recChatRoom: RecChatRoom | null;
  recAlert: RecAlert | null;
  recNotify: RecNotify | null;
  recQuestion: RecQuestion | null;
  resQuestion: ResQuestion | null;
  recEmotion: RecEmotion | null;
  recNewEmotion: RecNewEmotion | null;
  createRoom: { type: string };
};

const initialState: ChatState = {
  isSocketConnected: false,
  recChatRoom: null,
  recAlert: null,
  recNotify: null,
  recQuestion: null,
  resQuestion: null,
  recEmotion: null,
  recNewEmotion: null,
  createRoom: { type: '' },
};

const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    setIsSocketConnected(state, action: PayloadAction<boolean>) {
      state.isSocketConnected = action.payload;
    },
    setRecChatRoom(state, action: PayloadAction<RecChatRoom | null>) {
      state.recChatRoom = action.payload;
    },
    setRecAlert(state, action: PayloadAction<RecAlert | null>) {
      state.recAlert = action.payload;
    },
    setRecNotify(state, action: PayloadAction<RecNotify | null>) {
      state.recNotify = action.payload;
    },
    setRecQuestion(state, action: PayloadAction<RecQuestion | null>) {
      state.recQuestion = action.payload;
    },
    setResQuestion(state, action: PayloadAction<ResQuestion | null>) {
      state.resQuestion = action.payload;
    },
    setRecEmotion(state, action: PayloadAction<RecEmotion | null>) {
      state.recEmotion = action.payload;
    },
    setRecNewEmotion(state, action: PayloadAction<RecNewEmotion | null>) {
      state.recNewEmotion = action.payload;
    },
    setCreateRoom(state, action: PayloadAction<{ type: string } | null>) {
      state.createRoom = action.payload;
    },
  },
});

export const {
  setIsSocketConnected,
  setRecChatRoom,
  setRecAlert,
  setRecNotify,
  setRecQuestion,
  setResQuestion,
  setRecEmotion,
  setRecNewEmotion,
  setCreateRoom,
} = chatSlice.actions;

export default chatSlice.reducer;
