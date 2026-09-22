export default function Page() {
  return (
    <main
      style={{
        colorScheme: 'light dark',
        position: 'relative',
        display: 'flex',
        minHeight: '100vh',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'light-dark(#fff, #000)',
        color: 'light-dark(#000, #fff)',
      }}
    >
      <svg
        aria-hidden="true"
        style={{ width: 80, height: 80 }}
        width={80}
        height={80}
        fill="none"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
        stroke="currentColor"
        strokeWidth="0.5"
      >
        <path
          d="M14.2 14.2H17V6.9375C17 4.76288 15.2371 3 13.0625 3H5.8V5.8M14.2 14.2V7.79063L7.79062 14.2H14.2ZM14.2 14.2V17H6.9375C4.76288 17 3 15.2371 3 13.0625V5.8H5.8M5.8 5.8V12.2313L12.2313 5.8H5.8Z"
          strokeLinejoin="round"
        />
      </svg>
      <div
        style={{
          position: 'absolute',
          top: 'calc(50% + 52px)',
          left: '50%',
          display: 'flex',
          transform: 'translateX(-50%)',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '8px',
          whiteSpace: 'nowrap',
        }}
      >
        <h1
          style={{
            margin: 0,
            fontSize: '14px',
            fontWeight: 500,
            color: 'light-dark(#71717a, #a1a1aa)',
          }}
        >
          Your v0 generation will show here.
        </h1>
        <p
          style={{
            margin: 0,
            fontSize: '13px',
            color: 'light-dark(#a1a1aa, #71717a)',
          }}
        >
          Now on GitHub
        </p>
      </div>
    </main>
  )
}
