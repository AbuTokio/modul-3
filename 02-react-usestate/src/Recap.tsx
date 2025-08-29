// ~ ?? => Ersatzwert

export function UserProfil({ name }: any) {
  return (
    <div>
      {/* Backup, wenn nichts (undefined, null) da ist, dann sollte der Ersatzwert übernommen werden. */}
      <h2>{name ?? "Unbekannter Benutzer"}</h2>
    </div>
  )
}

// ~ && => Bedingung

export function Notifications({ count }: any) {
  return (
    <div>
      <h2>Benachrichtigungen</h2>
      {(count !== null || undefined) && <p>Du hast {count} neue Nachrichten.</p>}
    </div>
  )
}
