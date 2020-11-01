import {h} from 'preact';

function Profile({
  imageUrl,
  date,
  profileLink,
  displayName,
  anchorLink,
}: {
  imageUrl: string;
  date: string;
  profileLink: string;
  displayName: string;
  anchorLink: string;
}) {
  return (
    <div class="profile">
      <img
        src={imageUrl}
        alt="Profile picture"
        crossorigin={
          imageUrl && imageUrl.startsWith('https://www.gravatar.com/')
        }
      />
      <a href={profileLink}>{displayName}</a>
      at
      <a href={anchorLink}>{date}</a>
    </div>
  );
}

function Answer({
  link,
  creation_date,
  owner,
  body,
}: {
  link: string;
  creation_date: string;
  owner: {
    profile_image: string;
    display_name: string;
    link: string;
  };
  body: string;
}) {
  return (
    <div>
      <Profile
        anchorLink={link}
        date={creation_date}
        displayName={owner.display_name}
        imageUrl={owner.profile_image}
        profileLink={owner.link}
      />
    </div>
  );
}

export function Question(props: {
  anchorLink: string;
  answers: Array<object>;
  body: string;
  date: string;
  displayName: string;
  imageUrl: string;
  path: string;
  profileLink: string;
  title: string;
}) {
  return (
    <div>
      <h3>{props.title}</h3>
      <Profile {...props}></Profile>
      <div>{props.body}</div>
      <div>
        {answers.map((data) => (
          <QuestionCard {...data} />
        ))}
      </div>
    </div>
  );
}
