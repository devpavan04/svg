'use client';

import { motion } from 'motion/react';
import Wrapper from '@/app/components/wrapper';
import One from '@/app/components/one';

type Component = {
  component: React.FC;
  name?: string;
};

const components: Component[] = [
  {
    component: One,
  },
];

export default function Box() {
  return (
    <section className="flex flex-col gap-6 font-[family-name:var(--font-geist-sans)]">
      {components.map((Component, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 * (index + 1), ease: 'easeInOut' }}
        >
          <Wrapper name={Component.name}>
            <Component.component />
          </Wrapper>
        </motion.div>
      ))}
    </section>
  );
}
