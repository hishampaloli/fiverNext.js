/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Container, Heading, Text, Image } from 'theme-ui';
import Tabs, { TabPane } from 'rc-tabs';
import { RiCheckboxCircleFill } from 'react-icons/ri';
import { rgba } from 'polished';
import { LearnMore } from 'components/link';
import tabImage1 from 'assets/images/tab-illustration-1.png';

const data = [
  {
    id: 1,
    tabTitle: 'For Womens',
    title: `Work from Home jobs for WOMEN has 90 LAKH+ Indian resellers who are happy and financially strong.`,
    description: `Share products you like and earn ₹30,000 per month with resell Online and Start Working From Home Today Visit www.beautyplayers.com Now!.`,
    moreLink: '#explore-more',
    image: tabImage1,
    list: [
      'Is work from home for women even possible?',
      'What is online reselling?',
      'Why should you consider online reselling?',
      'What is Beauty Players?',
      'Why should you choose beauty Players for online reselling ?',
    ],
  },
  {
    id: 2,
    tabTitle: 'For Moms',
    title: `Work from Home jobs for WOMEN has 90 LAKH+ Indian resellers who are happy and financially strong.`,
    description: `Share products you like and earn ₹30,000 per month with resell Online and Start Working From Home Today Visit www.beautyplayers.com Now!.`,
    moreLink: '#explore-more',
    image: tabImage1,
    list: [
      'How to restart your work after you beacome a mom ?',
      'How should you choose a work from home job?',
      'Should you choose a work from Home job?',
      'why should you choose a work from Home job for moms?',
    ],
  },
  {
    id: 3,
    tabTitle: 'For Students',
    title: `To start your Part time earnings, visit www.beautyplayers.com Now! Only 5 hours a day `,
    description: `Share products you like and earn ₹30,000 per month with ZERO Investment! Pick, Share & Earn. Nothing speaks louder than you being able to support you family.`,
    moreLink: '#explore-more',
    image: tabImage1,
    list: [
      'Should you start an online part-time job as a college student?',
      'Should you consider reselling as an online part-time job?',
      'Why should you start reselling now?',
      'Why should you choose to resell with Beauty Players?',
    ],
  },
  {
    id: 4,
    tabTitle: 'Business Without Investment',
    title: `Start your business with Beauty Players and Earn ₹30,000 per month with ZERO Investment! start in just 2 min. `,
    description: `Resell Online & Start Your Business Today visit www.beautyplayers.com Now!.`,
    moreLink: '#explore-more',
    image: tabImage1,
    list: [
      'What is online reselling?',
      'why should you choose an online business without investment?',
      'How to earn money from home without investment?',
      'What can you resell online with Beauty Players?',
    ],
  },
  {
    id: 5,
    tabTitle: 'How it Works?',
    title: `Earn ₹30,000 per month with ZERO Investment!Become an Online reseller from home under just 2 min. `,
    description: `Sign up for free & Make money online! Join the family of 90 Lakh+ resellers. Earn every week, as we credit your profit directly into your account.`,
    moreLink: '#explore-more',
    image: tabImage1,
    list: [
      'What is online reselling?',
      'How can I Earn my margin?',
      'How can I find more customers?',
      'When will I get my earned margin?',
      'Is COD available?',
    ],
  },
];

const WhyUs = () => {
  return (
    <Box as="section" id="why-us" sx={styles.section}>
      <Container>
        <Tabs sx={styles.tabs} animated={{ tabPane: true }}>
          {data?.map((item) => (
            <TabPane
              key={item.id}
              tab={<Heading as="h4">{item.tabTitle}</Heading>}
            >
              <Box>
                <Heading>{item.title}</Heading>
                <Text as="p" sx={styles.description}>
                  {item.description}
                </Text>
                <Box sx={styles.list}>
                  {item.list.map((item, i) => (
                    <Box key={i} className="list-item">
                      <RiCheckboxCircleFill
                        color="#3FDBB1"
                        size="20px"
                        sx={{ mr: 2 }}
                      />
                      <span>{item}</span>
                    </Box>
                  ))}
                </Box>
                <Box sx={styles.learnMore}>
                  <LearnMore path={item.moreLink} label="Explore more" />
                </Box>
              </Box>
              <Box sx={styles.illustration}>
                <Image src={item.image} alt="illustration" />
              </Box>
            </TabPane>
          ))}
        </Tabs>
      </Container>
    </Box>
  );
};

export default WhyUs;

const styles = {
  section: {
    pt: [11, null, null, 12],
    pb: [8, null, null, 9, null, 11],
  },
  tabs: {
    border: 0,
    '.rc-tabs-nav': {
      mb: [8, null, null, 9, 10, 9, 12],
    },
    '.rc-tabs-nav-wrap': {
      borderBottom: `1px solid ${rgba('#01070D', 0.1)}`,
      justifyContent: 'center',
    },
    '.rc-tabs-nav-list': {
      flexGrow: 1,
      justifyContent: 'space-evenly',
      pb: [3, null, null, 5, null, 6],
    },
    '.rc-tabs-tab-btn': {
      outline: 0,
      alignItems: 'center',
      img: {
        outline: 0,
      },
    },
    '.rc-tabs-tab': {
      backgroundColor: 'transparent',
      // m: ['0 45px'],
      h4: {
        fontFamily: 'body',
        fontSize: [0, null, null, 17, null, null, 4],
        fontWeight: 700,
        lineHeight: 1.5,
        textAlign: ['center', null, null, null, 'left'],
        whiteSpace: ['break-spaces', null, null, null, 'unset'],
      },
    },
    '.rc-tabs-tabpane': {
      display: ['flex', null, null, 'grid'],
      flexDirection: ['column-reverse', null, null, 'unset'],
      alignItems: 'center',
      justifyContent: 'center',
      gridTemplateColumns: [null, null, null, '0.9fr 1.1fr'],
      outline: 0,
      gap: [5, null, null, 11],
      h2: {
        color: 'heading',
        fontSize: [24, null, null, 6, 26, 8, 40],
        fontWeight: 700,
        lineHeight: [1.45, null, null, 1.5],
        letterSpacing: [null, null, null, '0.5px', null, '-1px'],
        textAlign: ['center', null, null, 'left'],
      },
      p: {
        color: 'textSecondary',
        fontSize: [1, null, null, 2, 17],
        lineHeight: [1.87, null, null, 2, 2.48],
        textAlign: ['center', null, null, 'left'],
        mt: [4],
      },
      '.list-item': {
        fontSize: [0, null, null, 1, 2],
        fontWeight: 500,
        lineHeight: [2.8],
        display: 'flex',
        alignItems: 'center',
      },
    },
  },
  list: {
    mt: [5],
    display: 'flex',
    flexDirection:'column',
    justifyContent: ['center', null, null, 'unset'],
    gridTemplateColumns: ['repeat(2, 164px)', null, null, 'repeat(2, 180px)'],
  },
  learnMore: {
    mt: [4],
    textAlign: ['center', null, null, 'left'],
    a: {
      fontSize: [null, null, null, 1, 2],
    },
  },
  illustration: {
    display: ['flex'],
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: [null, null, null, null, null, 'center'],
    img: {
      maxWidth: ['65%', null, null, '100%', null, '90%', '100%'],
    },
  },
};
