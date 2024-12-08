import { Dices } from 'lucide-react'

export function Logo() {
  return (
    <a href='/' className='flex flex-row items-center gap-4 text-lg'>
      <Dices size={35} absoluteStrokeWidth />
      mini-games
    </a>
  );
}
