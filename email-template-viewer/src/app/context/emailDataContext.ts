"use client"

import { createContext } from "react";

export interface emailDataType {
    name: string;
    title: string;
    body: string;
    setName(name: string): void;
    setTitle(title: string): void;
    setBody(body: string): void;
}

export const EmailDataContext = createContext<emailDataType | null>(null);