import { TypingEffect } from "./TypingEffect";

const typeWriter = document.getElementById("typeWriter") as HTMLElement;

const typingEffect = new TypingEffect(typeWriter, false);
typingEffect.startType();