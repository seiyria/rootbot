
import { Inject, AutoWired, Singleton } from 'typescript-ioc';

import { ICommand, ICommandArgs, ICommandResult } from '../interfaces';
import { EmojiService } from '../services/emoji';

@Singleton
@AutoWired
export class SeiyriaCommand implements ICommand {

  help = 'See all the stuff Seiyria made for this bot!';
  aliases = ['seiyria'];

  @Inject private emojiService: EmojiService;

  async execute(cmdArgs: ICommandArgs): Promise<ICommandResult> {
    const { message } = cmdArgs;
    message.author.send(`
**__Vast__**
Vast: The Crystal Companion - https://vast.seiyria.com

**__Root__**
Vagabot (Me!)
Root: The Woodland Companion - https://root.seiyria.com
Root Cards - https://rootcards.seiyria.com
Clockroot - https://clockroot.seiyria.com
Woodland Warriors Leaderboard - https://wwleaders.seiyria.com

**__Root RPG__**
Map Generator (in development) - https://woodlandcreator.seiyria.com

**__Fort__**
Fort Cards - https://fortcards.seiyria.com

**__Oath__**
Oath Cards - https://oathcards.seiyria.com
`
    );

    message.reply(this.emojiService.getEmoji('notify'));

    return { resultString: 'seiyriad' };
  }
}