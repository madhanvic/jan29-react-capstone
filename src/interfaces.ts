export interface FormStateInteface {
  name: {
    value: string;

    validator: () => {
      result: boolean;
      message: string | null;
    };
  };
  userName: {
    value: string;

    validator: () => {
      result: boolean;
      message: string | null;
    };
  };
  email: {
    value: string;

    validator: () => {
      result: boolean;
      message: string | null;
    };
  };
  mobile: {
    value: string;

    validator: () => {
      result: boolean;
      message: string | null;
    };
  };
  shareMyRegistrationData: {
    value: boolean;
    validator: () => {
      result: boolean;
      message: string | null;
    };
  };
}

export interface FormErrorInterface {
  name: string | null;
  userName: string | null;
  email: string | null;
  mobile: string | null;
  shareMyRegistrationData: string | null;
}
