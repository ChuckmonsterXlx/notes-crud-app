import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import apiCall from '../../helpers/apiCall';
import { useAppSelector } from '../../hooks/redux';

const Home = () => {
  apiCall();

  const { users, verifedUser } = useAppSelector((state) => state);

  return (
    <>
        <Text>Users:</Text>
        <View style={styles.container}>
            <View style={styles.tableContainer}>
                
                <View style={ styles.header }>
                    <View style={[styles.cell, styles.headerCell]}>
                        <Text style={styles.headerText}>Name</Text>
                    </View>
                    <View style={[styles.cell, styles.headerCell]}>
                        <Text style={styles.headerText}>Email</Text>
                    </View>
                    <View style={[styles.cell, styles.headerCell]}>
                        <Text style={styles.headerText}>Role</Text>
                    </View>
                </View>

                {
                    users.map((user) => (
                        <View key={ user.id } style={styles.row}>
                            <View style={styles.cell}>
                                <Text style={styles.cellText}>{user.name}</Text>
                            </View>
                            <View style={styles.cell}>
                                <Text style={styles.cellText}>{user.email}</Text>
                            </View>
                            <View style={styles.cell}>
                                <Text style={styles.cellText}>{user.role.label}</Text>
                            </View>
                        </View>
                    ))
                }

            </View>
        </View>
    </>
  );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    tableContainer: {
        width: '100%',
        borderWidth: 1,
        borderColor: '#000',
    },
    header: {
        flexDirection: 'row',
    },
    row: {
        flexDirection: 'row',
    },
    cell: {
        flex: 1,
        padding: 10,
        borderWidth: 1,
        borderColor: '#000',
    },
    headerCell: {
        backgroundColor: '#f2f2f2',
    },
    headerText: {
        fontWeight: 'bold',
    },
    cellText: {
        textAlign: 'center',
    },
});

export default Home;
