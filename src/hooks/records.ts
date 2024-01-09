import { useRecords } from '@puzzlehq/sdk';

export const useGameRecords = () => {
  const { records } = useRecords({
    filter: {
      programIds: [
        'wheres_alex_buddy.aleo',
        'puzzle_pieces_buddy.aleo',
        'multiparty_pvp_utils_v015.aleo',
      ],
      type: 'unspent',
    },
    multisig: false,
  });
  const gameNotifications = records?.filter(
    (record) => record.programId === 'wheres_alex_buddy.aleo'
  );
  const puzzleRecords = records?.filter(
    (record) => record.programId === 'puzzle_pieces_buddy.aleo'
  );
  const utilRecords = records?.filter(
    (record) => record.programId === 'multiparty_pvp_utils_v015.aleo'
  );

  console.log([gameNotifications, puzzleRecords, utilRecords]);

  return { puzzleRecords, gameNotifications, utilRecords };
};
