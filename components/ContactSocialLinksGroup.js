import ContactSocialLinks from './ContactSocialLinks';

const ContactSocialLinksGroup = ({ cls }) => {
  return (
    <ul className={cls}>
      <ContactSocialLinks link="https://www.linkedin.com/in/luis-pinheiro" icon="fab fa-linkedin" text="Linkedin" />
      <ContactSocialLinks link="mailto://luispinheiro35@hotmail.com" icon="fas fa-envelope" text="Send me an email" />
      <ContactSocialLinks link="https://github.com/luis-pinheiro" icon="fab fa-github" text="Github" />
      <ContactSocialLinks
        link="https://dev.to/luispinheiro"
        title="luispinheiro's DEV Community Profile"
        icon="fab fa-dev"
        text="DEV"
      />
      <ContactSocialLinks
        link="https://www.freecodecamp.org/luis-pinheiro"
        icon="fab fa-free-code-camp"
        text="FreeCodeCamp"
      />
    </ul>
  );
};

export default ContactSocialLinksGroup;
