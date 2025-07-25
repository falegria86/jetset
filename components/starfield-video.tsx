"use client"

export default function StarfieldVideo() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Video de fondo con efecto starfield */}
      <iframe
        src="https://www.youtube.com/embed/UNOmaFs6KaY?autoplay=1&mute=1&loop=1&playlist=UNOmaFs6KaY&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&disablekb=1&fs=0&cc_load_policy=0&playsinline=1&start=0"
        className="absolute inset-0 w-full h-full pointer-events-none opacity-75"
        style={{
          width: '100vw',
          height: '100vh',
          transform: 'scale(1.2)', // Escalar para eliminar bordes
          objectFit: 'cover'
        }}
        allow="autoplay; encrypted-media"
        allowFullScreen={false}
        frameBorder="0"
        title="Starfield Background"
      />

      {/* Overlay para oscurecer si es necesario */}
      <div
        className="absolute inset-0 bg-black/20 pointer-events-none"
        style={{ mixBlendMode: 'multiply' }}
      />
    </div>
  )
}