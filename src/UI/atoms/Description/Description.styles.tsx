type DescriptionProps = {
  label: string;
  content: string;
};

const Description: React.FC<DescriptionProps> = ({ label, content }) => (
  <>
    <span>{label}</span> <span>{content}</span>
  </>
);

export default Description;
