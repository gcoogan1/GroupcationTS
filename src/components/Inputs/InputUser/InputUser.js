import { FlatList, Modal, Pressable, Text, View } from "react-native";
import { useState } from "react";

import Icon from "../../Icon/Icon";
import ChevronRight from "../../../../assets/icons/Chevron_Right.svg";
import { inputUserStyles } from "./styles/InputUser.styles";
import { theme } from "../../../styles/theme";
import Avatar from "../../Avatar/Avatar";

/**
 * This component renders a user input that allows users to select travelers.
 * @prop {array} users required -> an array of objects listing user information
 * Ex. 
 * const USERS = [
    {
      name: "Patrick Star",
      initials: 'PS',
      avatarImage: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/a0/Sandy_Cheeks.svg/440px-Sandy_Cheeks.svg.png',
      userId: '123'
    },
    {
      name: "SpongeBob Squarepants",
      initials: "SS",
      avatarImage: 'https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/SpongeBob_SquarePants_character.svg/600px-SpongeBob_SquarePants_character.svg.png?20231203073904',
      userId: '455'
    },
      name: "Sam Buio",
      initials: "SB",
      avatarImage: '',
      userId: '126'
    }
  ];
 * @prop {boolean} isDisabled optional -> disabled state of the input
 * @prop {boolean} inputError optional -> error state of the input
 * @returns {ReactNode} Renders a input user field.
 * 
 * @example <InputUser isDisabled users={USERS}  />
 */
const InputUser = ({ users, isDisabled, inputError }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [userList, setUserList] = useState([]);

  const greaterThanTen = userList.length >= 10;

  const displayedUsers = greaterThanTen && userList.slice(0, 9);
  const remainingUsers = userList.length - displayedUsers.length;

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const addUser = (user) => {
    setUserList([
      ...userList,
      { initials: user.initials, avatarImage: user.avatarImage },
    ]);
  };

  return (
    <View style={inputUserStyles.container}>
      <View
        style={[
          inputUserStyles.contentContainer,
          isFocused && inputUserStyles.contentContainerFocused,
          isDisabled && inputUserStyles.contentContainerDisabled,
          inputError && inputUserStyles.contentContainerError,
        ]}
      >
        <View
          style={[
            inputUserStyles.userContainer,
            isFocused && inputUserStyles.userContainerFocused,
            isDisabled && inputUserStyles.userContainerDisabled,
            inputError && inputUserStyles.userContainerError,
          ]}
        >
          <View
            style={[
              inputUserStyles.userContent,
              userList?.length > 0 && inputUserStyles.userContentAvatar,
            ]}
          >
            {userList.length === 0 ? (
              <Text
                style={[
                  inputUserStyles.userEmptyText,
                  isDisabled && inputUserStyles.userEmptyDisabled,
                ]}
              >
                No Travelers Selected
              </Text>
            ) : (
              <>
                {greaterThanTen ? (
                  <>
                    {displayedUsers.map((user, index) => {
                      return (
                        <View
                          key={user.userId}
                          style={[userList.length > 5 && { right: index * 28 }]}
                        >
                          <Avatar
                            avatarImage={{ uri: user.avatarImage }}
                            initials={user.initials}
                          />
                        </View>
                      );
                    })}
                    <View style={{ right: 9 * 28 }}>
                      <Avatar numOfUsers={remainingUsers} />
                    </View>
                  </>
                ) : (
                  <>
                    {userList.map((user, index) => {
                      return (
                        <View
                          key={user.userId}
                          style={[userList.length > 5 && { right: index * 24 }]}
                        >
                          <Avatar
                            avatarImage={{ uri: user.avatarImage }}
                            initials={user.initials}
                          />
                        </View>
                      );
                    })}
                  </>
                )}
              </>
            )}
          </View>
        </View>

        <Pressable
          onPressIn={handleFocus}
          style={inputUserStyles.labelContainer}
          onPress={openModal}
          disabled={isDisabled}
        >
          <Text
            style={[
              inputUserStyles.labelText,
              isDisabled && inputUserStyles.labelTextDisabled,
              inputError && inputUserStyles.labelTextError,
            ]}
          >
            Select Travelers ({userList.length})
          </Text>
          <Icon>
            <ChevronRight
              color={
                !isDisabled
                  ? theme.color.surface.onBasePrimary
                  : theme.color.disabled.onBase
              }
            />
          </Icon>
        </Pressable>
      </View>
      {!!inputError && (
        <Text style={inputUserStyles.errorText}>Error Message</Text>
      )}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}
      >
        <View style={inputUserStyles.modalContainer}>
          <View style={inputUserStyles.modalContent}>
            <FlatList
              data={users}
              keyExtractor={(item) => item.userId}
              // renderItem={({item}) => <Text>{item.name}</Text>}
              renderItem={({ item }) => (
                <Pressable
                  style={inputUserStyles.modalListItem}
                  onPress={() => {
                    addUser(item), handleBlur(), closeModal();
                  }}
                >
                  <Avatar
                    initials={item.initials}
                    avatarImage={{ uri: item.avatarImage }}
                  />
                  <Text style={inputUserStyles.modalText}>{item.name}</Text>
                </Pressable>
              )}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default InputUser;
