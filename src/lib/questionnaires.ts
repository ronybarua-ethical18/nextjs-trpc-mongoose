import frame from '../../public/images/on-board/Frame.svg';
import frame1 from '../../public/images/on-board/Frame (1).svg';
import frame2 from '../../public/images/on-board/Frame (2).svg';
import frame3 from '../../public/images/on-board/Frame (3).svg';
import frame4 from '../../public/images/on-board/Frame (4).svg';
import frame5 from '../../public/images/on-board/Frame (5).svg';
import frame6 from '../../public/images/on-board/Frame (6).svg';

export const questionnaires = [
  {
    category: 'Health and Family',
    description:
      'This info allows Keeper to suggest tax savings. Select all that apply.',
    questions: [
      { question: 'Have children aged 11 years or younger', key: 'children_under_11' },
      {
        question: 'I have children aged 12 or older with special care needs',
        key: 'children_special_needs',
      },
      {
        question:
          'Have additional travel distance or expenses related to dropping off the child in a child day care centre or after-school supervision scheme',
        key: 'child_care_expenses',
      },
      { question: 'I am a single parent', key: 'single_parent' },
    ],
    icon: frame,
  },
  {
    category: 'Bank and Loans',
    description:
      'This info allows Keeper to suggest tax savings. Select all that apply.',
    questions: [
      { question: 'Have a loan', key: 'has_loan' },
      {
        question: 'Have refinanced a loan in the last year',
        key: 'refinanced_loan',
      },
      {
        question: 'Have taken out a joint loan with someone',
        key: 'joint_loan',
      },
      {
        question: 'Have young people’s housing savings (BSU)',
        key: 'bsu_savings',
      },
      {
        question: 'I have sold shares or securities at a loss',
        key: 'sold_shares_loss',
      },
    ],
    icon: frame1,
  },
  {
    category: 'Work and Education',
    description:
      'This info allows Keeper to suggest tax savings. Select all that apply.',
    questions: [
      { question: 'Moved for a new job', key: 'moved_for_job' },
      { question: 'I work as a fisherman', key: 'fisherman_job' },
      { question: 'I work as a seafarer', key: 'seafarer_job' },
      {
        question:
          'The return distance between home and work is more than 37 kilometres',
        key: 'long_commute_distance',
      },
      {
        question:
          'Have expenses for road toll or ferry when travelling between your home and workplace',
        key: 'toll_ferry_expenses',
      },
      {
        question: 'I stay away from home overnight because of work',
        key: 'overnight_work_stay',
      },
    ],
    icon: frame2,
  },
  {
    category: 'Housing and Property',
    description:
      'This info allows Keeper to suggest tax savings. Select all that apply.',
    questions: [
      {
        question:
          'Housing in a housing association, housing company or jointly owned property',
        key: 'housing_association',
      },
      {
        question: 'I have rented out a residential property or a holiday home',
        key: 'rented_property',
      },
      {
        question: 'Sold a residential property or holiday home with a loss',
        key: 'sold_property_loss',
      },
    ],
    icon: frame3,
  },
  {
    category: 'Gift and Donations',
    description:
      'This info allows Keeper to suggest tax savings. Select all that apply.',
    questions: [
      {
        question: 'I have made donations to voluntary organisations',
        key: 'voluntary_donations',
      },
    ],
    icon: frame4,
  },
  {
    category: 'Hobby, Odd Jobs, and Extra Incomes',
    description:
      'This info allows Keeper to suggest tax savings. Select all that apply.',
    questions: [
      { question: 'I have a sole proprietorship', key: 'sole_proprietorship' },
      {
        question:
          'Sell goods or services, blog/influencer, practise e-sports (gaming), breed animals, or rent out property on a small scale.',
        key: 'small_scale_business',
      },
      {
        question: 'I have received salary from odd jobs and services',
        key: 'odd_jobs_income',
      },
    ],
    icon: frame5,
  },
  {
    category: 'Foreign Income',
    description:
      'This info allows Keeper to suggest tax savings. Select all that apply.',
    questions: [
      {
        question:
          'Have income or wealth in another country than Norway and pay tax in the other country',
        key: 'foreign_income_tax',
      },
    ],
    icon: frame6,
  },
];

