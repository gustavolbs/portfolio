export type LocaleMessages = {
  intro: {
    status: string;
    title: string;
    body: string;
    cta: string;
    roleLine: readonly string[];
  };
  hero: {
    eyebrow: string;
    kicker: string;
    availabilityLabel: string;
    availabilityValue: string;
    locationLabel: string;
    locationValue: string;
    valueLabel: string;
    valueValue: string;
  };
  logoSection: {
    eyebrow: string;
    title: string;
    body: string;
  };
  stackSection: {
    eyebrow: string;
    title: string;
    body: string;
  };
  stackGroups: {
    frontend: string;
    backend: string;
    devops: string;
    systems: string;
    product: string;
  };
  clientLogos: {
    civicplus: string;
    duelbits: string;
    evermart: string;
    leaf: string;
    linker: string;
    livenation: string;
    nivells: string;
    vccess: string;
    warren: string;
  };
  sections: {
    education: {
      eyebrow: string;
      title: string;
      body: string;
      items: {
        ufcg: {
          title: string;
          meta: string;
          body: string;
        };
        fullcycle: {
          title: string;
          meta: string;
          body: string;
        };
      };
    };
    experience: {
      eyebrow: string;
      title: string;
      body: string;
      items: {
        xteam: {
          title: string;
          meta: string;
          body: string;
        };
        frontend: {
          title: string;
          meta: string;
          body: string;
        };
        delivery: {
          title: string;
          meta: string;
          body: string;
        };
      };
    };
    creation: {
      eyebrow: string;
      title: string;
      body: string;
      items: {
        lensly: {
          title: string;
          meta: string;
          body: string;
        };
        "open-source": {
          title: string;
          meta: string;
          body: string;
        };
        github: {
          title: string;
          meta: string;
          body: string;
        };
      };
    };
  };
  footer: {
    eyebrow: string;
    title: string;
    body: string;
    highlights: readonly { label: string; value: string }[];
    form: {
      eyebrow: string;
      title: string;
      body: string;
      subject: string;
      nameFieldLabel: string;
      emailFieldLabel: string;
      name: string;
      email: string;
      message: string;
      submit: string;
      direct: string;
      directBody: string;
      mail: string;
      linkedin: string;
    };
  };
  rail: {
    introLabel: string;
    introDescription: string;
    logosLabel: string;
    logosDescription: string;
    stackLabel: string;
    stackDescription: string;
    footerLabel: string;
    footerDescription: string;
    chapterHint: string;
  };
};
