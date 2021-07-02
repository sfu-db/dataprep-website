/* eslint-disable @next/next/no-img-element */
import teamList from "../../public/team.json"
import Link from "next/link"

type MemberProps = {
  name: string
  avatarUrl: string
  avatarSize: number
  profileUrl: string
}

const Member = ({ name, avatarUrl, avatarSize, profileUrl }: MemberProps) => (
  <div className="w-full h-40 flex justify-center items-center flex-col">
    <img
      className="rounded-full"
      src={`${avatarUrl}&size=${avatarSize}`}
      alt={`${name} avatar`}
      width={avatarSize}
      height={avatarSize}
    />
    <Link href={profileUrl}>
      <a className="text-primary-500 font-semibold">{name}</a>
    </Link>
  </div>
)

const Team = () => (
  <section>
    <div className="min-h-screen grid grid-cols-3 md:grid-cols-5 xl:grid-cols-7 row-auto">
      {teamList.map(member => (
        <Member
          key={member.id}
          name={member.login}
          avatarUrl={member.avatar_url}
          avatarSize={100}
          profileUrl={member.html_url}
        />
      ))}
    </div>
  </section>
)

export default Team
