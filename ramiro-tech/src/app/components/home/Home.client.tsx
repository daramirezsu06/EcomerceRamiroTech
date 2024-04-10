
("use client");

import { HomeContainer } from "./Home.styles";

interface HomeClientProps {
  children: any;
}

function HomeClient({ children }: HomeClientProps) {
  return <HomeContainer>{children}</HomeContainer>;
}

export default HomeClient;
