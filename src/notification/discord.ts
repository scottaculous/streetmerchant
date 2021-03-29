import {Link, Store} from '../store/model';
import Discord from 'discord.js';
import {config} from '../config';
import {logger} from '../logger';

const {notifyGroup, webhooks, notifyGroupSeries} = config.notifications.discord;

function getIdAndToken(webhook: string) {
  const match = /.*\/webhooks\/(\d+)\/(.+)/.exec(webhook);

  if (!match) {
    throw new Error('could not get discord webhook');
  }

  return {
    id: match[1],
    token: match[2],
  };
}

export function sendDiscordMessage(link: Link, store: Store) {
  if (webhooks.length > 0) {
    logger.debug('↗ sending discord message');

    (async () => {
      try {
        const embed = new Discord.MessageEmbed()
          .setTitle(link.name)
          .setDescription(link.brand)
          .setURL(link.url)
          .setColor('#52b788')
          .setTimestamp();

        if (link.screenshot) embed.setThumbnail(link.screenshot)
        
        embed.addField('Status', 'In Stock', true);

        if (link.price)
          embed.addField('Price', `${store.currency}${link.price}`, true);
        
        if (link.cartUrl) embed.addField('Add to Cart', `[ATC](${link.cartUrl})`, true);

        embed.addField('Other Links', `[Login](${link.loginUrl}) | [Cart](${link.cartUrl})`, true);

        embed.setFooter('DripAIO | Powered by Slacker Moniter', '');

        embed.setTimestamp();

        let notifyText: string[] = [];

        if (notifyGroup) {
          notifyText = notifyText.concat(notifyGroup);
        }

        if (Object.keys(notifyGroupSeries).indexOf(link.series) !== -1) {
          notifyText = notifyText.concat(notifyGroupSeries[link.series]);
        }

        const promises = [];
        for (const webhook of webhooks) {
          const {id, token} = getIdAndToken(webhook);
          const client = new Discord.WebhookClient(id, token);

          promises.push({
            client,
            message: client.send(notifyText.join(' '), {
              embeds: [embed],
              username: 'slacker',
            }),
          });
        }

        (await Promise.all(promises)).forEach(({client}) => client.destroy());

        logger.info('✔ discord message sent');
      } catch (error: unknown) {
        logger.error("✖ couldn't send discord message", error);
      }
    })();
  }
}
