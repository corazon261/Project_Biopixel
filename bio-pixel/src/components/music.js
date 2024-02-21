import React from "react";

export default function MusicPlayer() {
  return (
    <audio controls autoPlay loop>
      <source src="caminho_para_a_sua_musica.mp3" type="audio/mpeg" />
      Seu navegador não suporta o elemento de áudio.
    </audio>
  );
}
