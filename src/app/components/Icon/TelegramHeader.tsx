import Telegram from './Telegram';

export default function TelegramHeader() {
  return (
    <div className='flex h-8 w-8 items-center justify-center rounded-lg border border-white duration-300 ease-in-out lg:hover:border-[#3E97C3] lg:hover:bg-[#3E97C3]'>
      <Telegram />
    </div>
  );
}
