// store/songStore.ts
import { create } from "zustand";
import type { SongType } from "@/types/globalTypes";

type PlayerState = {
    currentSong: SongType | null;
    isPlaying: boolean;
    volume: number;
    isMuted: boolean;
    previousVolume: number;
    currentTime: number;
    duration: number;
    isLoading: boolean;
    isSeeking: boolean;
};

type SongStore = PlayerState & {
    // Actions
    setSong: (song: SongType) => void;
    setPlaying: (playing: boolean) => void;
    togglePlay: () => void;
    setVolume: (volume: number) => void;
    toggleMute: () => void;
    setCurrentTime: (time: number) => void;
    setDuration: (duration: number) => void;
    setLoading: (loading: boolean) => void;
    setSeeking: (seeking: boolean) => void;
    resetForNewSong: () => void;
};

export const useSongStore = create<SongStore>((set, get) => ({
    // Initial state
    currentSong: null,
    isPlaying: false,
    volume: 0.7,
    isMuted: false,
    previousVolume: 0.7,
    currentTime: 0,
    duration: 0,
    isLoading: true,
    isSeeking: false,

    // Actions
    setSong: (song) =>
        set({
            currentSong: song,
            isLoading: true, // Start loading when song changes
            currentTime: 0,
            duration: 0,
        }),

    setPlaying: (playing) => set({ isPlaying: playing }),

    togglePlay: () =>
        set((state) => ({
            isPlaying: !state.isPlaying,
        })),

    setVolume: (volume) =>
        set((state) => ({
            volume,
            isMuted: volume === 0 ? true : state.isMuted,
            previousVolume: volume > 0 ? volume : state.previousVolume,
        })),

    toggleMute: () =>
        set((state) => {
            if (state.isMuted) {
                return {
                    isMuted: false,
                    volume: state.previousVolume || 0.7,
                };
            } else {
                return {
                    isMuted: true,
                    previousVolume: state.volume,
                    volume: 0,
                };
            }
        }),

    setCurrentTime: (time) => set({ currentTime: time }),

    setDuration: (duration) => set({ duration }),

    setLoading: (loading) => set({ isLoading: loading }),

    setSeeking: (seeking) => set({ isSeeking: seeking }),

    resetForNewSong: () =>
        set({
            currentTime: 0,
            duration: 0,
            isLoading: true,
            isPlaying: false,
            isSeeking: false,
        }),
}));
