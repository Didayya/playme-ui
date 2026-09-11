import Link from "next/link";

export default function FamilyInviteCard() {
  return (
    <section className="relative overflow-hidden rounded-2xl bg-play-green p-5 text-black">
      <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full border-[12px] border-black/10" />

      <div className="relative">
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-black text-play-green">
          ♡
        </span>

        <p className="mt-5 text-[10px] font-black uppercase tracking-[0.18em]">
          Play together
        </p>

        <h2 className="mt-1 text-xl font-black leading-tight">
          Bring your family & friends.
        </h2>

        <p className="mt-2 text-xs leading-5 text-black/60">
          Invite people you know and compete together in private tournaments.
        </p>

        <Link
          href="/friends"
          className="mt-5 inline-flex rounded-xl bg-black px-4 py-3 text-[10px] font-black uppercase tracking-wide text-white"
        >
          Invite friends
        </Link>
      </div>
    </section>
  );
}
