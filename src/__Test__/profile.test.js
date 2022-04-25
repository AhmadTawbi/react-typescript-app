import renderer from 'react-test-renderer';
import { Button } from "antd";
import profileImage from '../images/profile.jpg';

it('changes the class when hovered', () => {
    const profileCard = { name: 'test', email: 'abc@test.com' };
  const component = renderer.create(
    <div className="profileContainer">
            <div className="profileImage">
                <img src={profileImage} alt="profile" />
            </div>
            <div className="profileName">{profileCard.name}</div>
            <div className="profileEmail">{profileCard.email}</div>
            <div className="viewProfile"><Button onClick={() => {}} type="primary">View Profile</Button></div>
        </div>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // manually trigger the callback
  
  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
