export default function Pill({ content }: { content: string }) {
  return (
    <span className='select-none text-xs bg-primary/20 px-2 py-1 rounded-md group-hover:bg-accent/20 group-hover:text-accent transition-all duration-500'>{content}</span>
  )
};
