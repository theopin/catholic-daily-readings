import React, {useState, useEffect }from "react";
import Reading from "../reading/Reading";
import "../../commons/Commons.css"; // Common/shared CSS
import Responsorial from "../responsorial/Responsorial";
import Theme from "../theme/Theme";
import fetchDataFromExternalURL from "./OrderFetch";

function Order() {
  const [data, setData] = useState(null);


  useEffect(() => {
    fetchDataFromExternalURL()
      .then((response) => {
        console.log(response)
        setData(response);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const sampleData = {
    header: 'Twenty-fifth Sunday in Ordinary Time',
    lectionary: 133,
    readings: [
      {
        header: 'Reading 1',
        reference: 'Is 55:6-9',
        rawText: '\n' +
          '                Seek the LORD while he may be found,<br>call him while he is near.<br>Let the scoundrel forsake his way,<br>and the wicked his thoughts;<br>let him turn to the LORD for mercy;<br>to our God, who is generous in forgiving.<br>For my thoughts are not your thoughts,<br>nor are your ways my ways, says the LORD.<br>As high as the heavens are above the earth,<br>so high are my ways above your ways<br>and my thoughts above your thoughts.<br>\n' +
          '              ',
        nonFormattedText: 'Seek the LORD while he may be found,call him while he is near.Let the scoundrel forsake his way,and the wicked his thoughts;let him turn to the LORD for mercy;to our God, who is generous in forgiving.For my thoughts are not your thoughts,nor are your ways my ways, says the LORD.As high as the heavens are above the earth,so high are my ways above your waysand my thoughts above your thoughts.',
        formattedText: 'Seek the LORD while he may be found,\n' +
          'call him while he is near.\n' +
          'Let the scoundrel forsake his way,\n' +
          'and the wicked his thoughts;\n' +
          'let him turn to the LORD for mercy;\n' +
          'to our God, who is generous in forgiving.\n' +
          'For my thoughts are not your thoughts,\n' +
          'nor are your ways my ways, says the LORD.\n' +
          'As high as the heavens are above the earth,\n' +
          'so high are my ways above your ways\n' +
          'and my thoughts above your thoughts.'
      },
      {
        header: 'Responsorial Psalm',
        reference: 'Ps 145:2-3, 8-9, 17-18',
        rawText: '\n' +
          '                R. (18a) <strong>The Lord is near to all who call upon him.</strong><br>Every day will I bless you,<br>and I will praise your name forever and ever.<br>Great is the LORD and highly to be praised;<br>his greatness is unsearchable.<br>R. <strong>The Lord is near to all who call upon him.</strong><br>The LORD is gracious and merciful,<br>slow to anger and of great kindness.<br>The LORD is good to all<br>and compassionate toward all his works.<br>R. <strong>The Lord is near to all who call upon him.</strong><br>The LORD is just in all his ways<br>and holy in all his works.<br>The LORD is near to all who call upon him,<br>to all who call upon him in truth.<br>R. <strong>The Lord is near to all who call upon him.</strong><br>\n' +
          '              ',
        nonFormattedText: 'R. (18a) The Lord is near to all who call upon him.Every day will I bless you,and I will praise your name forever and ever.Great is the LORD and highly to be praised;his greatness is unsearchable.R. The Lord is near to all who call upon him.The LORD is gracious and merciful,slow to anger and of great kindness.The LORD is good to alland compassionate toward all his works.R. The Lord is near to all who call upon him.The LORD is just in all his waysand holy in all his works.The LORD is near to all who call upon him,to all who call upon him in truth.R. The Lord is near to all who call upon him.',
        formattedText: 'R. (18a) The Lord is near to all who call upon him.\n' +
          'Every day will I bless you,\n' +
          'and I will praise your name forever and ever.\n' +
          'Great is the LORD and highly to be praised;\n' +
          'his greatness is unsearchable.\n' +
          'R. The Lord is near to all who call upon him.\n' +
          'The LORD is gracious and merciful,\n' +
          'slow to anger and of great kindness.\n' +
          'The LORD is good to all\n' +
          'and compassionate toward all his works.\n' +
          'R. The Lord is near to all who call upon him.\n' +
          'The LORD is just in all his ways\n' +
          'and holy in all his works.\n' +
          'The LORD is near to all who call upon him,\n' +
          'to all who call upon him in truth.\n' +
          'R. The Lord is near to all who call upon him.'
      },
      {
        header: 'Reading 2',
        reference: 'Phil 1:20c-24, 27a',
        rawText: '\n' +
          '                Brothers and sisters:<br>Christ will be magnified in my body, whether by life or by death. <br>For to me life is Christ, and death is gain. <br>If I go on living in the flesh,<br>that means fruitful labor for me. <br>And I do not know which I shall choose. <br>I am caught between the two. <br>I long to depart this life and be with Christ,<br>for that is far better. <br>Yet that I remain in the flesh<br>is more necessary for your benefit.<br><br>Only, conduct yourselves in a way worthy of the gospel of Christ.<br>\n' +
          '              ',
        nonFormattedText: 'Brothers and sisters:Christ will be magnified in my body, whether by life or by death. For to me life is Christ, and death is gain. If I go on living in the flesh,that means fruitful labor for me. And I do not know which I shall choose. I am caught between the two. I long to depart this life and be with Christ,for that is far better. Yet that I remain in the fleshis more necessary for your benefit.Only, conduct yourselves in a way worthy of the gospel of Christ.',
        formattedText: 'Brothers and sisters:\n' +
          'Christ will be magnified in my body, whether by life or by death.\n' +
          'For to me life is Christ, and death is gain.\n' +
          'If I go on living in the flesh,\n' +
          'that means fruitful labor for me.\n' +
          'And I do not know which I shall choose.\n' +
          'I am caught between the two.\n' +
          'I long to depart this life and be with Christ,\n' +
          'for that is far better.\n' +
          'Yet that I remain in the flesh\n' +
          'is more necessary for your benefit.\n' +
          'Only, conduct yourselves in a way worthy of the gospel of Christ.'
      },
      {
        header: 'Alleluia',
        reference: 'Cf. Acts 16:14b',
        rawText: '\n' +
          '                R. <strong>Alleluia, alleluia.</strong><br>Open our hearts, O Lord,<br>to listen to the words of your Son.<br>R. <strong>Alleluia, alleluia.</strong><br>\n' +
          '              ',
        nonFormattedText: 'R. Alleluia, alleluia.Open our hearts, O Lord,to listen to the words of your Son.R. Alleluia, alleluia.',
        formattedText: 'R. Alleluia, alleluia.\n' +
          'Open our hearts, O Lord,\n' +
          'to listen to the words of your Son.\n' +
          'R. Alleluia, alleluia.'
      },
      {
        header: 'Gospel',
        reference: 'Mt 20:1-16a',
        rawText: '\n' +
          `                Jesus told his disciples this parable:<br>"The kingdom of heaven is like a landowner<br>who went out at dawn to hire laborers for his vineyard. <br>After agreeing with them for the usual daily wage,<br>he sent them into his vineyard. <br>Going out about nine o'clock,<br>the landowner saw others standing idle in the marketplace,<br>and he said to them, 'You too go into my vineyard,<br>and I will give you what is just.'<br>So they went off. <br>And he went out again around noon,<br>and around three o'clock, and did likewise. <br>Going out about five o'clock,<br>the landowner found others standing around, and said to them,<br>'Why do you stand here idle all day?'<br>They answered, 'Because no one has hired us.'<br>He said to them, 'You too go into my vineyard.'<br>When it was evening the owner of the vineyard said to his foreman,<br>'Summon the laborers and give them their pay,<br>beginning with the last and ending with the first.'<br>When those who had started about five o'clock came,<br>each received the usual daily wage. <br>So when the first came, they thought that they would receive more,<br>but each of them also got the usual wage. <br>And on receiving it they grumbled against the landowner, saying,<br>'These last ones worked only one hour,<br>and you have made them equal to us,<br>who bore the day's burden and the heat.'<br>He said to one of them in reply,<br>'My friend, I am not cheating you. <br>Did you not agree with me for the usual daily wage? <br>Take what is yours and go. <br>What if I wish to give this last one the same as you? <br>Or am I not free to do as I wish with my own money? <br>Are you envious because I am generous?'<br>Thus, the last will be first, and the first will be last."<br><br><br>\n` +
          '              ',
        nonFormattedText: `Jesus told his disciples this parable:"The kingdom of heaven is like a landownerwho went out at dawn to hire laborers for his vineyard. After agreeing with them for the usual daily wage,he sent them into his vineyard. Going out about nine o'clock,the landowner saw others standing idle in the marketplace,and he said to them, 'You too go into my vineyard,and I will give you what is just.'So they went off. And he went out again around noon,and around three o'clock, and did likewise. Going out about five o'clock,the landowner found others standing around, and said to them,'Why do you stand here idle all day?'They answered, 'Because no one has hired us.'He said to them, 'You too go into my vineyard.'When it was evening the owner of the vineyard said to his foreman,'Summon the laborers and give them their pay,beginning with the last and ending with the first.'When those who had started about five o'clock came,each received the usual daily wage. So when the first came, they thought that they would receive more,but each of them also got the usual wage. And on receiving it they grumbled against the landowner, saying,'These last ones worked only one hour,and you have made them equal to us,who bore the day's burden and the heat.'He said to one of them in reply,'My friend, I am not cheating you. Did you not agree with me for the usual daily wage? Take what is yours and go. What if I wish to give this last one the same as you? Or am I not free to do as I wish with my own money? Are you envious because I am generous?'Thus, the last will be first, and the first will be last."`,
        formattedText: 'Jesus told his disciples this parable:\n' +
          '"The kingdom of heaven is like a landowner\n' +
          'who went out at dawn to hire laborers for his vineyard.\n' +
          'After agreeing with them for the usual daily wage,\n' +
          'he sent them into his vineyard.\n' +
          "Going out about nine o'clock,\n" +
          'the landowner saw others standing idle in the marketplace,\n' +
          "and he said to them, 'You too go into my vineyard,\n" +
          "and I will give you what is just.'\n" +
          'So they went off.\n' +
          'And he went out again around noon,\n' +
          "and around three o'clock, and did likewise.\n" +
          "Going out about five o'clock,\n" +
          'the landowner found others standing around, and said to them,\n' +
          "'Why do you stand here idle all day?'\n" +
          "They answered, 'Because no one has hired us.'\n" +
          "He said to them, 'You too go into my vineyard.'\n" +
          'When it was evening the owner of the vineyard said to his foreman,\n' +
          "'Summon the laborers and give them their pay,\n" +
          "beginning with the last and ending with the first.'\n" +
          "When those who had started about five o'clock came,\n" +
          'each received the usual daily wage.\n' +
          'So when the first came, they thought that they would receive more,\n' +
          'but each of them also got the usual wage.\n' +
          'And on receiving it they grumbled against the landowner, saying,\n' +
          "'These last ones worked only one hour,\n" +
          'and you have made them equal to us,\n' +
          "who bore the day's burden and the heat.'\n" +
          'He said to one of them in reply,\n' +
          "'My friend, I am not cheating you.\n" +
          'Did you not agree with me for the usual daily wage?\n' +
          'Take what is yours and go.\n' +
          'What if I wish to give this last one the same as you?\n' +
          'Or am I not free to do as I wish with my own money?\n' +
          "Are you envious because I am generous?'\n" +
          'Thus, the last will be first, and the first will be last."'
      }
    ]
  }
  if(!data) {
    return <div></div>
  }

  else if(!data.Mass_R2) {
    return (
      <div className="container">
      <Theme title={sampleData.header} date={data.date}/>
      <Reading title="First Reading" verse={data.Mass_R1.source} summary={data.Mass_R1.heading} text={data.Mass_R1.text}/>
      <Responsorial title="Responsorial Psalm" verse={data.Mass_Ps.source}  text={data.Mass_Ps.text}/>
      <Responsorial title="Gospel Acclamation" verse={data.Mass_GA.source} text={data.Mass_GA.text}/>
      <Reading title="Gospel" verse={data.Mass_G.source} summary={data.Mass_G.heading} text={data.Mass_G.text}/>
    </div>
    )
  }
 
  return (
    <div className="container">
      <Theme title={sampleData.header} date={data.date}/>
      <Reading title="First Reading" verse={data.Mass_R1.source} summary={data.Mass_R1.heading} text={data.Mass_R1.text}/>
      <Responsorial title="Responsorial Psalm" verse={data.Mass_Ps.source} text={data.Mass_Ps.text}/>
      <Reading title="Second Reading" verse={data.Mass_R2.source} summary={data.Mass_R2.heading} text={data.Mass_R2.text}/>
      <Responsorial title="Gospel Acclamation" verse={data.Mass_GA.source} text={data.Mass_GA.text}/>
      <Reading title="Gospel" verse={data.Mass_G.source} summary={data.Mass_G.heading} text={data.Mass_G.text}/>
    </div>
  );
}

export default Order;
