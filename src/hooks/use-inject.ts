import { MobXProviderContext } from "mobx-react";
import React from "react";

export const useInjectedStore = <T>(name: string) => {
  const mobxContext = React.useContext(MobXProviderContext);
  const result: T = mobxContext[name];
  return result;
}
