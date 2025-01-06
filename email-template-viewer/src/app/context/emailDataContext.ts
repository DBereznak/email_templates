"use client"

import { createContext } from "react";

export interface emailDataType {
    name: string;
    title: string;
    setName(name: string): void;
    setTitle(name: string): void;
}

export const EmailDataContext = createContext<emailDataType | null>(null);