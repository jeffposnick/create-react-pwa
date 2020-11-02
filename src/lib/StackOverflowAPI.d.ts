export interface QuestionsForTagData {
  items?: QuestionsForTagEntity[] | null;
}

export interface QuestionsForTagEntity {
  last_activity_date: number;
  question_id: number;
  score: number;
  title: string;
}

export interface QuestionData {
  items?: QuestionEntity[] | null;
}

export interface QuestionEntity {
  answers?: AnswerEntity[] | null;
  body: string;
  creation_date: number;
  last_activity_date: number;
  link: string;
  owner: Owner;
  question_id: number;
  score: number;
  title: string;
}

export interface AnswerEntity {
  body: string;
  creation_date: number;
  link: string;
  owner: Owner;
  score: number;
}

export interface Owner {
  display_name: string;
  link: string;
  profile_image: string;
}
