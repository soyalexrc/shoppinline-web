import cn from 'classnames';
import React from 'react';

interface Props {
  className?: string;
  children?: React.ReactNode;
  el?: React.ElementType;
  clean?: boolean;
}

const Container: React.FC<Props> = ({
                                      children,
                                      className,
                                      el: Component = 'div',
                                      clean,
                                    }) => {
  const rootClassName = cn(className, {
    'mx-auto max-w-[1380px] px-4 md:px-6 3xl:px-0': !clean,
  });

  return <Component className={rootClassName}>{children}</Component>;
};

export default Container;
