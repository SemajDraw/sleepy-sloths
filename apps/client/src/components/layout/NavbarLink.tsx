import { LinkProps, useBreakpointValue, useTheme } from '@chakra-ui/react';
import { useEffect, useRef } from 'react';
import { NAVBAR_HEIGHTS } from '../../constants';
import { Props } from '../../interfaces/component';
import { Link } from '../Link';

interface NavbarLinkProps extends Props, LinkProps {
  isActive: boolean;
  to: string;
  props?: LinkProps;
}

export const NavbarLink = ({
  children,
  to,
  isActive,
  props,
}: NavbarLinkProps) => {
  const theme = useTheme();

  const isBelowLg = useBreakpointValue({ base: true, lg: false });
  const scrollSectionRef = useRef<Element | null>(null);

  useEffect(() => {
    scrollSectionRef.current = document.getElementById(to);
  }, [to]);

  return (
    <Link
      fontWeight={700}
      textTransform="lowercase"
      fontSize="xl"
      href={`/#${to}`}
      onClick={(e) => {
        e.preventDefault();

        const elementTop = Math.max(
          (scrollSectionRef.current as HTMLElement).offsetTop -
            (isBelowLg ? NAVBAR_HEIGHTS.MOBILE : NAVBAR_HEIGHTS.DESKTOP) -
            16,
          0
        );

        window.scrollTo({ top: elementTop, behavior: 'smooth' });
      }}
      color={isActive ? 'orange' : theme.colors.gray['400']}
      _hover={{
        color: 'orange',
        textDecoration: 'none',
      }}
      {...props}
    >
      {children}
    </Link>
  );
};
